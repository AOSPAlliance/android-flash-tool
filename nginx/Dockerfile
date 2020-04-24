FROM nginx:latest

COPY conf/default.conf /etc/nginx/conf.d/default.conf

COPY proxy.html /usr/share/nginx/html/static/proxy.html
COPY api.js /usr/share/nginx/html
COPY app.js /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY secure-index.html /usr/share/nginx/html/secure/index.html
COPY secure-app.js /usr/share/nginx/html/secure/app.js
