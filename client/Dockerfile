# Use a lightweight, official Nginx image
FROM nginx:alpine

# 1. Copy your static application files
COPY ./app.html /usr/share/nginx/html
COPY ./app.js /usr/share/nginx/html
COPY ./app.css /usr/share/nginx/html

# 2. Copy your custom Nginx configuration
# This will replace the default Nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf