FROM node:12

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server/ .
COPY dist/ ./public/

ENV PORT=8080

CMD ["npm", "start"]