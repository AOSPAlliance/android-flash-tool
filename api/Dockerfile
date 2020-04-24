FROM node:latest

WORKDIR /usr/src/app
COPY . .
RUN npm install express

EXPOSE 8082
CMD [ "node", "app.js" ]
