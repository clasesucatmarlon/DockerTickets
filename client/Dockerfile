FROM node:20

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --force

COPY . .

EXPOSE 5174:5174

CMD [ "npm", "run", "dev" ]