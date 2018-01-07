FROM node:8

WORKDIR /app

COPY ./ ./

RUN npm install

WORKDIR /app/client

RUN npm install

