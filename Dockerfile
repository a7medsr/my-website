# Multi-stage Dockerfile for building and serving the Vite app with nginx
FROM node:18-bullseye-slim AS builder
WORKDIR /app

# copy dependency manifests first for better caching
COPY package.json package-lock.json* pnpm-lock.yaml* bun.lockb* ./

# ensure CA certs are available
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*

# install dependencies (falls back to npm install if no lockfile)
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# copy source and build
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS runner

# remove default site config
RUN rm -f /etc/nginx/conf.d/default.conf

# copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
