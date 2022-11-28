FROM node:current-alpine
WORKDIR /server

COPY package*.json ./
RUN npm install

COPY . .
CMD [ "node", "server.js" ]