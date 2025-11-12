FROM node:22-alpine

WORkDIR /app

ENV NEXT_PUBLIC_API_URL=http://localhost:3000

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "start"] 