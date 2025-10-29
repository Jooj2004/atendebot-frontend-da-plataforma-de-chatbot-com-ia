FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NEXT_PUBLIC_SERVER_URL=http://localhost:4000

RUN npm run build

CMD [ "npm","run", "start" ]