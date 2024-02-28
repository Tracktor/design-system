# Install Deps
FROM node:20-alpine AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

RUN apk add --no-cache libc6-compat git

WORKDIR /app

COPY . .

RUN --mount=type=cache,target=/app/.yarn YARN_CACHE_FOLDER=/app/.yarn yarn --frozen-lockfile && yarn build-storybook

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
