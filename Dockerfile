# === Build stage ===
FROM node:20-alpine AS builder

# Install system dependencies + Bun
RUN apk add --no-cache curl bash git libc6-compat && \
    curl -fsSL https://bun.sh/install | bash && \
    mv /root/.bun /bun

ENV PATH="/bun/bin:${PATH}"

WORKDIR /app

COPY . .

# Use Docker BuildKit cache for Bun dependencies
# Bun stores downloaded packages in ~/.bun/install/cache
RUN --mount=type=cache,target=/bun/install/cache \
    bun install --ignore-scripts && \
    bun run build-storybook

# === Runtime stage ===
FROM busybox:1.35 AS runner

WORKDIR /app
RUN adduser -D static
USER static

COPY --from=builder /app/storybook-static ./
COPY src/assets/ /app/src/assets/

EXPOSE 8080
ENTRYPOINT ["busybox", "httpd"]
CMD ["-f", "-p", "8080"]
