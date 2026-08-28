import express from 'express';
import cors from 'cors';
import resources from '../demo.json' with { type: 'json' };

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
app.options('/{*splat}', cors(corsOptionsDelegate));
app.use(cors(corsOptionsDelegate));

app.get('/demo.json', function (req, res, next) {
  res.status(200);
  res.contentType('application/json');
  res.send(resources);
});

export default app;