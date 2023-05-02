FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json .

COPY . .
RUN ./node_modules/.bin/ng build



FROM nginx:latest
COPY --from=builder /app/dist/angular-project /usr/share/nginx/html
