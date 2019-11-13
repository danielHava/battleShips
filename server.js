const config = require('./src/config');
const app = require('./src/app');
const http = require('http');

const server = http.createServer(app);
const port = config.API_PORT;

server.listen(port);

server.on('listening', async () => {
  console.info(`Your app is listening on port ${port}`);
});
