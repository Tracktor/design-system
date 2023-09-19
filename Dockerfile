# Install Deps
FROM oven/bun:latest AS builder

# Set the NODE_OPTIONS environment variable
ENV NODE_OPTIONS=--openssl-legacy-provider

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat git && npm install -g bun

WORKDIR /app

COPY . .

RUN bun install
RUN bun run storybook build

# Server

FROM busybox:1.35 AS runner

WORKDIR /app

RUN adduser -D static

USER static

COPY --from=builder /app/storybook-static ./
COPY src/assets/ /app/src/assets/

EXPOSE 8080

ENTRYPOINT ["busybox", "httpd"]

CMD ["-f", "-p", "8080"]
