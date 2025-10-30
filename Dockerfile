# Install Deps
FROM node:20-alpine AS builder

RUN apk add --no-cache curl bash git libc6-compat && \
    curl -fsSL https://bun.sh/install | bash && \
    mv /root/.bun /bun

ENV PATH="/bun/bin:${PATH}"

WORKDIR /app

COPY . .

RUN bun install --ignore-scripts && \
    bun run build-storybook

FROM busybox:1.35 AS runner

WORKDIR /app

RUN adduser -D static

USER static

COPY --from=builder /app/storybook-static ./
COPY src/assets/ /app/src/assets/

EXPOSE 8080

ENTRYPOINT ["busybox", "httpd"]

CMD ["-f", "-p", "8080"]
