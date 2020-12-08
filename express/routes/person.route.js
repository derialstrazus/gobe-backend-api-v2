const express = require("express");
const firebase = require("../../firebase/index");
const { models } = require('../../sequelize');
const { route } = require("./auth.route");


const router = express.Router();

router.get("/", (req, res) => {
  models.person.findAll({
    include: models.address
  })
    .then((data) => {
      res.send(Object.values(data));
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/me", (req, res) => {
  var token = req.header('firebase-token')
  firebase.validateToken(token)
    .then((decodedIdToken) => {
      var uid = decodedIdToken.user_id;
      models.person.findOne({
        where: {
          id: uid
        },
        include: models.address
      })
        .then((people) => {
          res.send(people)
        })
    })
    .catch((error) => {
      res.send(error)
    });
})

module.exports = router;