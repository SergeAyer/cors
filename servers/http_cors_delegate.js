const express = require('express');
const resources = require('../demo.json');
const cors = require('cors');

const app = express();

const corsOptionsDelegate = (req, callback) => {
  let corsOptions = { origin: false};
  // check whether the origin of the request is accepted
  // if yes, corsOptions = { origin: true };
  // otherwise, corsOptions = { origin: false };
  const urlObject = new URL(req.get('origin'));
  const hostName = urlObject.hostname;
  if (hostName === "localhost") {
    corsOptions.origin = true;
  }
  // the callback expects two parameters: error and options
  callback(null, corsOptions)
};
app.options(cors(corsOptionsDelegate));
app.use(cors(corsOptionsDelegate));

app.get('/demo.json', function (req, res, next) {
  res.status(200);
  res.contentType('application/json');
  res.send(resources);
});

module.exports = app;
