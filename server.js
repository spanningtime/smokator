'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const port = process.env.PORT || 8000;
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('short'));

// Expose public directory to client
// app.use(express.static(path.join(__dirname, 'public')))

// REQUIRE IN ROUTERS
// const chats = require('./routes/chats');
// const givers = require('./routes/givers');
// const places = require('./routes/places');
 const token = require('./routes/token');
// const users = require('./routes/users');

// ROUTE HANDLERS
// app.use(chats);
// app.use(givers);
// app.use(places);
 app.use(token);
// app.use(users);

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.status || err.output && err.output.statusCode) {
    return res.status(err.status || err.output.statusCode).send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port,', port);
});

module.exports = app;
