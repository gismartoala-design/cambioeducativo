#!/bin/sh

# Replace ${PORT} in nginx configuration
envsubst '${PORT}' < /app/nginx.conf.template > /etc/nginx/nginx.conf

# Start the Node.js server on the internal port used by Nginx.
# Cloud Run's public PORT remains reserved for Nginx.
PORT=5000 node dist/index.cjs &

# Start Nginx in the foreground
nginx -g 'daemon off;'
