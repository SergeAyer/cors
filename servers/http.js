import express from 'express';
import cors from 'cors';
import resources from '../demo.json' with { type: 'json' };

const app = express();

let myLogger = function (req, res, next) {
  console.log(req.url);  next();
};
app.use(myLogger);

// comment/uncommment for disabling/enabling all cors requests
// this adds an Access-Control-Allow-Origin: * to all responses
app.use(cors());

// const corsOptions = {
//  origin: 'http://localhost:63342',
//  // some legacy browsers (IE11, various SmartTVs) choke on 204
//  optionsSuccessStatus: 200
// };

// To limit the access of demo.json to localhost or localhost:6342
// use the first line, otherwise use the second line and all cors requests
// will be accepted.
// app.get('/demo.json', cors(corsOptions), function (req, res, next) {
app.get('/demo.json', function (req, res, next) {
  res.status(200);
  res.send(resources);
});

export default app;