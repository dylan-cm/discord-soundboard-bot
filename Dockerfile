FROM timbru31/node-alpine-git:latest

ENV NODE_ENV=production

WORKDIR /app

ENV PORT 80
ENV HOST 0.0.0.0

RUN apk add ffmpeg

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN apk add --update python3 make g++\
  && rm -rf /var/cache/apk/*

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production

COPY . .

RUN npm i -g nodemon
CMD npm start