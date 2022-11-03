const express = require('express');
const resources = require('../demo.json');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: (origin, callback) => {
    const urlObject = new URL(origin);
    const hostName = urlObject.hostname;
    if (hostName === "localhost") {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};
app.use(cors(corsOptions));

app.get('/demo.json', function (req, res, next) {
  res.status(200);
  res.send(resources);
});

module.exports = app;
