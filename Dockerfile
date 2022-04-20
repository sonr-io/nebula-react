# Usar una imagen  
FROM node:current-alpine3.14

WORKDIR /usr/src/app

COPY package.json /app

COPY . .

RUN npm set progress=false && npm install

EXPOSE 6006

CMD ["npm", "run", "storybook"]