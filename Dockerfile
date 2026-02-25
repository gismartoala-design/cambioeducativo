# Build Stage
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM node:20-slim
WORKDIR /app

# Install Nginx
RUN apt-get update && apt-get install -y nginx gettext-base && rm -rf /var/lib/apt/lists/*

# Copy built artifacts from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/nginx.conf ./nginx.conf.template
COPY --from=build /app/start.sh ./start.sh
COPY --from=build /app/static-site ./static-site

# Install production dependencies only
RUN npm install --production

# Make start script executable
RUN chmod +x ./start.sh

# Cloud Run defaults to port 8080
ENV PORT=8080

EXPOSE 8080

CMD ["./start.sh"]
