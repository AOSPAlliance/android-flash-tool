FROM node:12

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

USER node
RUN npm install express

COPY --chown=node:node . .

EXPOSE 8082
CMD [ "node", "app.js" ]
