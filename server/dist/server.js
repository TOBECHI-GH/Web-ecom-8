#!/usr/bin/env node
"use strict";

require("dotenv").config();

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    errorHandler = require("errorhandler"),
    methodOverride = require("method-override"),
    hostname = process.env.HOSTNAME || "localhost",
    port = parseInt(process.env.PORT, 10) || 4567,
    publicDir = process.argv[2] || __dirname + "/public",
    path = require("path");

app.use(methodOverride());
app.use(bodyParser.json({
  type: "application/activity+json"
})); // support json encoded bodies

app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express["static"](publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));
app.post("/invoice", function (req, res) {});
app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});
console.log("Customyz app running at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);