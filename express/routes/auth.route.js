const express = require("express");
const firebase = require("../../firebase/index");

const router = express.Router();

router.post("/", (req, res) => {
  var token = req.header('firebase-token')
  firebase.validateToken(token)
    .then((decodedIdToken) => {
      res.send(decodedIdToken);
    })
    .catch((error) => {
      console.log(error)
    });
});

router.post("/signup", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  firebase.firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    })
  
});

router.post("/signin", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  
  firebase.firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    })
});

module.exports = router;