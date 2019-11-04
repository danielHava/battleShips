// server.js
// where your node app starts

// init project
const config = require('./src/config');
const app = require('./src/app');
const http = require('http');

const server = http.createServer(app);
const port = process.env.API_PORT || 8080;

server.listen(port);

server.on('listening', async () => {
  console.info(`Your app is listening on port ${port}`);
});
