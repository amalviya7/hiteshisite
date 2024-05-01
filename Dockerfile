FROM node:alpine
WORKDIR /var/www/html
COPY package.json ./
RUN command
COPY . .
RUN cd /var/www/html npm run build
RUN num start
EXPOSE 3000
