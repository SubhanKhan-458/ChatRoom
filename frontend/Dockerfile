# Stage 1: build
FROM node:18.15.0 AS development

WORKDIR /subhan/frontend/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@16.0.2

COPY . .

RUN npm run build

EXPOSE 4200