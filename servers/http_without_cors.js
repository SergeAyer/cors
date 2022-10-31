const express = require('express');
const resources = require('../demo.json');

const app = express();

app.get('/demo.json', function (req, res, next) {
  res.status(200);
  res.send(resources);
});

module.exports = app;