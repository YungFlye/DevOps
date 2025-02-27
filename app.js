const express = require('express');

const apiSquareroot = require('./api/squareroot');

const app = express();

app.use(express.json());

app.use('/api/squareroot', apiSquareroot); // High level error handling

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.statusCode = 404;
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const name = err.name || 'Error';
  res.status(statusCode).json({ name, message: err.message });
});

module.exports = app;
