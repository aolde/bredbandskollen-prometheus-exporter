# build environment
FROM node:16-buster-slim as build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build

# production environment
FROM node:16-buster-slim
WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y wget
RUN wget https://frontend.bredbandskollen.se/download/bbk-cli_1.0.0_amd64.deb \
  && dpkg -i bbk-cli_1.0.0_amd64.deb \
  && rm bbk-cli_1.0.0_amd64.deb
COPY --from=build /usr/src/app/dist /usr/src/app/package.json /usr/src/app/yarn.lock /usr/src/app/
RUN yarn install --production=true
EXPOSE 80
ENV HTTP_PORT=80
ENV HTTP_ADDRESS=0.0.0.0
CMD ["node", "./server.js"]