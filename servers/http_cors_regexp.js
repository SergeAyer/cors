import express from 'express';
import cors from 'cors';
import resources from '../demo.json' with { type: 'json' };

const app = express();

const corsOptions = {
  origin: /:\/\/localhost:[0-9]{5}$/
};
app.options('/{*splat}', cors(corsOptions));
app.use(cors(corsOptions));

app.get('/demo.json', function (req, res, next) {
  res.status(200);
  res.contentType('application/json');
  res.send(resources);
});

export default app;