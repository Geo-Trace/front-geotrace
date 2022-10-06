FROM node:16.17.0 AS build

WORKDIR /app

COPY . .

RUN npm install --production
RUN npm run build

FROM nginx:alpine

LABEL version="1.0"
LABEL description="front de l'application Geotrace"

COPY --from=build /app/build /usr/share/nginx/html

ENV REACT_APP_API_PORT=3000
ENV REACT_APP_API_URL=sbg.remi-ponche.fr

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]




