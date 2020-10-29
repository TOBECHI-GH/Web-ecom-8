# GADS community project

# Simple Express Static File Server

Our simple static file server.

## Installation (On Local Machine)

Install dependencies (first time only):

    $ npm install

## Installation (Using Docker)

    $ docker build -t gads/customyz:1.0 .

How to start:

- On local machine
  \$ node server

- On docker
  \$ docker run -p 4567:8080 imageId

How to deploy docker image
$ docker tag imageId conquext/customyz:gads01server
    $ docker push conquext/customyz:gads

Open [http://localhost:4567](http://localhost:4567)

If you need a different port:

    $ PORT=9999 node server

Open [http://localhost:9999](http://localhost:9999)

If you need a different hostname:

    $ HOSTNAME=192.168.0.1 node server

Open [http://192.168.0.1:4567](http://192.168.0.1:4567)
