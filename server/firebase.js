require("dotenv").config();
const firebase = require("firebase");
const dateFormat = require("dateformat");

const env = process.env;

const config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
};

firebase.initializeApp(config);
const db = firebase.firestore();

const refKey = "invoices";

function dbGetInvoice(id, res) {
  db.collection(`${refKey}`)
    .doc(id)
    .get()
    .then((doc) => {
      const childData = doc.data();
      childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd hh:mm");
      res.render(`${refKey}/id`, { row: childData });
    });
}

function dbSaveInvoice(body, res) {
  const postData = body;
  if (!postData.brdno) {
    // new
    postData.brddate = Date.now();
    var doc = db.collection(`${refKey}`).doc();
    postData.brdno = doc.id;
    doc.set(postData);
  } else {
    // update
    var doc = db.collection(`${refKey}`).doc(postData.brdno);
    doc.update(postData);
  }
  res.redirect(`${refKey}/list`);
}

function getInvoice(id, res) {
  firebase
    .database()
    .ref(`${refKey}/${id}`)
    .once("value", function (snapshot) {
      var childData = snapshot.val();
      childData.brdno = childSnapshot.key;
      childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
      res.render("incoice/id", { rows: childData });
    });
}

function saveInvoice(body, res) {
  const uniqueKey = Math.round(
    (Math.random() + 0.1) * (Math.random() + 0.1) * 23433545343423
  );
  firebase
    .database()
    .ref(`${refKey}/` + uniqueKey)
    .set(body);

  return uniqueKey;
}

module.exports = { db };
