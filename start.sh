#!/bin/sh

# Replace ${PORT} in nginx configuration
envsubst '${PORT}' < /app/nginx.conf.template > /etc/nginx/nginx.conf

# Start the Node.js server in the background
# We use the bundled .cjs version in dist
node dist/index.cjs &

# Start Nginx in the foreground
nginx -g 'daemon off;'
