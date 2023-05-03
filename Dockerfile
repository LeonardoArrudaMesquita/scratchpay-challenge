FROM node:14.18.3 AS base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN rm -rf /usr/src/app/node_modules
RUN rm -f /usr/src/app/yarn.lock

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]