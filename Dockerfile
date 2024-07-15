# Development and Build

FROM node:21-alpine as dev 
#workdir
WORKDIR /app

#copy package json files
COPY package*.json ./

#install the dependencies
RUN npm install -g npm@10.8.2
RUN npm install

#copy the application
COPY . .

#build the application
RUN npm run build


FROM nginx:latest as prod

#copy the build app from dev
COPY  --from=dev /app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
