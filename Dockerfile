FROM node:16.14.2

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --only=production
COPY . .

EXPOSE 8080
CMD [ "yarn", "start" ]
