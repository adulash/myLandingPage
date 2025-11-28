FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Verify build output exists
RUN test -f /app/dist/index.html && echo "Build successful" || (echo "Build failed" && exit 1)

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Coolify will handle port mapping automatically
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
