FROM node:16.17.0

LABEL version="1.0"
LABEL description="front de l'application Geotrace"

WORKDIR /app

COPY . .

RUN npm install --production
RUN npm run build
RUN npm install -g serve
RUN rm -r n* p* src/ tsconfig.json

EXPOSE 3000

CMD ["serve", "-s" , "build"] 








