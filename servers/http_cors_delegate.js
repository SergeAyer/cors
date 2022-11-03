const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  // check whether the origin of the request is accepted
  // if yes, corsOptions = { origin: true };
  // otherwise, corsOptions = { origin: false };
  // the callback expects two parameters: error and options
  callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate));
