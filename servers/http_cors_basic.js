const express = require('express');
const resources = require('../demo.json');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/demo.json', function (req, res, next) {
  res.status(200);
  res.contentType('application/json');
  res.send(resources);
});

module.exports = app;