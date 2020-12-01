FROM node:lts-alpine as builder

ENV ENV=prod

WORKDIR /app

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

COPY . .

RUN mkdir -pv ./dist/out

RUN npm run build

RUN ls -l ./dist/out

FROM nginx:stable

EXPOSE 4200

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/out /usr/share/nginx/html
