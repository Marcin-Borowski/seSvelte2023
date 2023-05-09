FROM node:20-alpine3.16

WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production=true

COPY build build

EXPOSE 3000
CMD ["node", "build"]