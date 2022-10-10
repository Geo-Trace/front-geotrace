FROM node:16.17.0 AS build

ENV REACT_APP_API_PORT=3000
ENV REACT_APP_API_URL=http://localhost

WORKDIR /app

COPY . .

RUN npm install --production
RUN npm run build

FROM node:16.17.0

LABEL version="1.0"
LABEL description="front de l'application Geotrace"

COPY --from=build /app/build /app

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s" , "app"]



