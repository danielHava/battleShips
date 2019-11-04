const express = require('express');
const config = require('./config');

const app = express();

app.set('config', config);
app.set('root', __dirname);

app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const game = require('./routes/game');
app.use(config.basePath + config.version + '/', game);

// log error
app.use((error, req, res, next) => {
  console.error({ message: error.message, meta: { error } });
  next(error);
});

// return error
app.use((err, req, res, next) => {
  if (err.type) {
    res.status(err.status).json({
      error: {
        message: err.message,
        status: err.status,
        developerMessage: err.developerMessage
      }
    });
  } else {
    res.status(400).json(err);
  }
});
