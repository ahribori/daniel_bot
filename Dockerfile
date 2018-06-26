FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install -g pm2

COPY . .
RUN npm run build

EXPOSE 8989

CMD ["pm2", "start", "pm2.json"]