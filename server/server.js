#!/usr/bin/env node
require("dotenv").config();

var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  errorHandler = require("errorhandler"),
  methodOverride = require("method-override"),
  firebase = require("./firebase");
(hostname = process.env.HOSTNAME || "localhost"),
  (port = parseInt(process.env.PORT, 10) || 4567),
  (publicDir = process.argv[2] || __dirname + "/public"),
  (path = require("path"));

app.use(methodOverride());
app.use(bodyParser.json({ type: "application/activity+json" })); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(publicDir));
app.use(
  errorHandler({
    dumpExceptions: true,
    showStack: true,
  })
);

const refKey = "invoices";
const response = { CREATED: 201, SUCCESS: 200, FAILED: 400, NOTFOUND: 404 };

// send an invoice to db and return link to record
app.post("/invoice", function (req, res) {
  const invoiceRecord = req.body;
  firebase.db
    .collection(`${refKey}`)
    .doc({ data: invoiceRecord })
    .then(function (docRef) {
      return res.status(response.CREATED).json({
        data: docRef,
        status: "success",
        message: "Invoice saved succesfully",
      });
    })
    .catch(function (error) {
      return res
        .status(response.FAILED)
        .json({ data: null, status: "error", message: error });
    });
});

// get all invoices
// disable this endpoint later or implement admin authorizations
app.get("/invoice", function (req, res) {
  firebase.db
    .collection(`${refKey}`)
    .get()
    .then(function (querySnapshot) {
      const invoices = [];
      querySnapshot.forEach((doc) => {
        const invoiceStruct = { id: doc.id, data: doc.data };
        invoices.push(invoiceStruct);
      });
      return res
        .status(response.SUCCESS)
        .json({ data: invoives, status: "success", message: "All invoices" });
    })
    .catch(function (error) {
      return res
        .status(response.FAILED)
        .json({ data: null, status: "error", message: error });
    });
});

// get a particular invoice with an invoice id passed in the url
app.get("/invoice/:invoiceId", function (req, res) {
  const { invoiceId } = req.params;

 firebase.db
   .collection(`${refKey}`)
   .doc(invoiceId)
   .get()
   .then((doc) => {
     const childData = doc.data();
     return res.status(response.SUCCESS).json({
       link: invoiceId,
       data: childData,
       status: "success",
       message: "Data retrieved successfully",
     });
   }).catch(function (error) {
      return res
        .status(response.FAILED)
        .json({ link: invoiceId, data: null, status: "error", message: error });
    });;


// delete an invoice
app.delete("/invoice/:invoiceId", function (req, res) {
  const { invoiceId } = req.params;
  firebase.db
    .collection(`${refKey}`)
    .doc(invoiceId)
    .delete()
    .then(function () {
      return res
        .status(response.SUCCESS)
        .json({
          link: invoiceId,
          status: "success",
          message: "Invoice removed successfully",
        })
        .catch(function (error) {
          return res.status(response.FAILED).json({
            link: invoiceId,
            status: "error",
            message: error,
          });
        });
    });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});

console.log("Customyz app running at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);
