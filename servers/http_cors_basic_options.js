const express = require('express');
const resources = require('../demo.json');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:63347'
};
app.use(cors(corsOptions));

app.get('/demo.json', function (req, res, next) {
  res.status(200);
  res.send(resources);
});

module.exports = app;