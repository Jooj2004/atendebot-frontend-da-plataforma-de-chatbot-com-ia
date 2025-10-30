FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NEXT_PUBLIC_SERVER_URL=https://atendebot-backend-da-plataforma-de.onrender.com
ENV NEXT_PUBLIC_MY_URL=https://atendebot-frontend-da-plataforma-de.onrender.com

RUN npm run build

CMD [ "npm","run", "start" ]