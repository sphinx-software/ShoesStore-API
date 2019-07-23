FROM node:12

RUN node --version

RUN npm --version

RUN echo "Checking node environent"

RUN echo $NODE_ENV

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install -g @fusion.io/cli@1.5.1

RUN npm install

RUN fusion --version

RUN cp .fusionrc .fusionrc.bak

RUN mv .product.fusionrc .fusionrc


RUN fusion framework config dump env

RUN fusion framework config dump debug

EXPOSE 3000

CMD npm run prod