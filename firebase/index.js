const admin = require('firebase-admin');
var adminAccount= require("../gobe-auth-f065a-firebase-adminsdk-ezh7a-5b21cd8a9c.json");
admin.initializeApp({
  credential: admin.credential.cert(adminAccount),
  databaseURL: "https://gobe-auth-f065a.firebaseio.com"
})

const firebase = require("firebase");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDRn49nVlMh8R7sK-C1aypBdLoKgE3kqNU",
  authDomain: "gobe-auth-f065a.firebaseapp.com",
  databaseURL: "https://gobe-auth-f065a.firebaseio.com",
  projectId: "gobe-auth-f065a",
  storageBucket: "gobe-auth-f065a.appspot.com",
  messagingSenderId: "886133754711",
  appId: "1:886133754711:web:bb85316635b41a155e4c12",
  measurementId: "G-KPJ5WFVXWR"
};
firebase.initializeApp(firebaseConfig);

exports.firebase = firebase;
exports.firebaseAdmin = admin;
exports.validateToken = function(token) {
  var decoded = new Promise((resolve, reject) => {
    admin.auth().verifyIdToken(token)
      .then(decodedIdToken => resolve(decodedIdToken))
      .catch((error) => {
        reject(error)
      })
  });
  return decoded;
};