FROM nginx:latest

ENV FLASH_URL=http://localhost:8080
ENV SECURE_URL=http://localhost:8081

COPY entrypoint.sh /entrypoint.sh
COPY conf/default.template /etc/nginx/conf.d/default.template
COPY flash.android.com /usr/share/nginx/html/
COPY secure.flash.android.com /usr/share/nginx/secure

VOLUME ["/usr/share/nginx/html/builds/builds.js"]
EXPOSE 8080 8081
ENTRYPOINT ["/entrypoint.sh"]