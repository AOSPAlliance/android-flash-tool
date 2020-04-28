#!/bin/bash

FLASH_PROTOCOL=$(echo $FLASH_URL | cut -f1 -d:)
if [ -z "${FLASH_PROTOCOL}" ]; then
  echo "failed to get flash url protocol"
  exit 1
fi

FLASH_DOMAIN=$(echo $FLASH_URL | cut -f3 -d\/ | cut -f1 -d:)
if [ -z "${FLASH_PROTOCOL}" ]; then
  echo "failed to get flash url domain"
  exit 1
fi

FLASH_PORT=$(echo $FLASH_URL | cut -f3 -d\/ | cut -f2 -d:)
if [ -z "${FLASH_PROTOCOL}" ]; then
  if [ "${FLASH_PROTOCOL}" == "http"]; then
    FLASH_PORT="80"
  fi
  if [ "${FLASH_PROTOCOL}" == "https"]; then
    FLASH_PORT="443"
  fi
fi

SECURE_PROTOCOL=$(echo $SECURE_URL | cut -f1 -d:)
if [ -z "${SECURE_PROTOCOL}" ]; then
  echo "failed to get secure url protocol"
  exit 1
fi

SECURE_DOMAIN=$(echo $SECURE_URL | cut -f3 -d\/ | cut -f1 -d:)
if [ -z "${SECURE_PROTOCOL}" ]; then
  echo "failed to get secure url domain"
  exit 1
fi

SECURE_PORT=$(echo $SECURE_URL | cut -f3 -d\/ | cut -f2 -d:)
if [ -z "${SECURE_PROTOCOL}" ]; then
  if [ "${SECURE_PROTOCOL}" == "http"]; then
    SECURE_PORT="80"
  fi
  if [ "${SECURE_PROTOCOL}" == "https"]; then
    SECURE_PORT="443"
  fi
fi

# add js config file with environment variables to flash and secure
cat > /usr/share/nginx/html/config.js <<EOL
config = {
  "FLASH_URL": "${FLASH_URL}",
  "FLASH_PROTOCOL": "${FLASH_PROTOCOL}",
  "FLASH_DOMAIN": "${FLASH_DOMAIN}",
  "FLASH_PORT": "${FLASH_PORT}",
  "SECURE_URL": "${SECURE_URL}",
  "SECURE_PROTOCOL": "${SECURE_PROTOCOL}",
  "SECURE_DOMAIN": "${SECURE_DOMAIN}",
  "SECURE_PORT": "${SECURE_PORT}"
}
EOL
cp /usr/share/nginx/html/config.js /usr/share/nginx/secure/config.js

# update flash and secure index.html
envsubst '$${FLASH_URL} $${SECURE_URL}' < /usr/share/nginx/html/index.template.html > /usr/share/nginx/html/index.html
envsubst '$${FLASH_URL} $${SECURE_URL}' < /usr/share/nginx/secure/index.template.html > /usr/share/nginx/secure/index.html

# update nginx config with correct domains and ports (having issues with envsubstr)
cp -f /etc/nginx/conf.d/default.template /etc/nginx/conf.d/default.conf
sed -i "s@FLASH_DOMAIN@${FLASH_DOMAIN}@" /etc/nginx/conf.d/default.conf
sed -i "s@FLASH_PORT@${FLASH_PORT}@" /etc/nginx/conf.d/default.conf
sed -i "s@SECURE_DOMAIN@${SECURE_DOMAIN}@" /etc/nginx/conf.d/default.conf
sed -i "s@SECURE_PORT@${SECURE_PORT}@" /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'