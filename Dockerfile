FROM node:13.12.0-alpine as build-step

RUN mkdir /app

WORKDIR /app

ADD package.json /app

RUN npm install

ADD . /app

CMD ["npm", "start"]

