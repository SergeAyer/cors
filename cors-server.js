// Final version
import httpServer from './servers/http.js'

// Internal Plugins
let port = 80;

// HTTP Server
httpServer.listen(port, function () {
  console.log('HTTP server started...');
  console.info('Your directory service is up and running on port %s', port);
});
