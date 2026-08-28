import express from 'express';
import cors from 'cors';
import resources from '../demo.json' with { type: 'json' };

const app = express();

const corsOptions = {
  origin: 'http://localhost:63344'
};
app.options('/{*splat}', cors(corsOptions));
app.use(cors(corsOptions));

app.get('/demo.json', function (req, res, next) {
  const myHeader = res.getHeader("access-control-allow-origin");
  console.log(myHeader);
  res.status(200);
  res.contentType('application/json');
  res.send(resources);
});

export default app;