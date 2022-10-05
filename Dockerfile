FROM node:16.17.0 AS build

WORKDIR /app

COPY . .

RUN npm install --production
RUN npm run build
RUN npm install -g serve
RUN rm -r n* p* src/ tsconfig.json


FROM nginx:alpine

LABEL version="1.0"
LABEL description="front de l'application Geotrace"

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]




