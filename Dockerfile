FROM node:12

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server/ .

ENV PORT=8080

CMD ["npm", "start"]