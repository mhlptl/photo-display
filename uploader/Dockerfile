# creates dist to use for production
FROM node:14.15.4-alpine3.12 AS prebuild
WORKDIR /tmp/
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY webpack.common.js ./
COPY webpack.prod.js ./
COPY . .
RUN npm run build

# for production
FROM nginx:alpine AS build
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=prebuild /tmp/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]