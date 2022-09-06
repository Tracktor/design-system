# Install Deps
FROM node:16-alpine AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

RUN apk add --no-cache libc6-compat git

WORKDIR /app

COPY . .

RUN yarn install && yarn build-storybook

# Server

FROM python:3.10-alpine AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 storybook
RUN adduser --system --uid 1001 storybook

COPY --from=builder /app/storybook-static ./

USER storybook

EXPOSE 8080

CMD ["python", "-m", "http.server", "8080"]
