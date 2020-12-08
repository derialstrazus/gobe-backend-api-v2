const express = require('express');
const cors = require('cors');

const routes = {
  auth: require('./routes/auth.route'),
  person: require('./routes/person.route'),
  listing: require('./routes/listing.route')
}

const gobeUrl = process.env.apiURL;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Hello!`)
});

app.use(`${gobeUrl}/person`, routes.person);
app.use(`${gobeUrl}/auth`, routes.auth);

module.exports = app;