import express from 'express';
import resources from '../demo.json' with { type: 'json' };

const app = express();

app.get('/demo.json', function (req, res, next) {
  res.status(200);
  res.contentType('application/json');
  res.send(resources);
});

export default app;