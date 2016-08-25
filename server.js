'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const port = process.env.PORT || 8080;
const path = require('path');


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.sockets.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('subscribe', (chatId) => {

    if (true) {
      socket.join(chatId);
      io.sockets.in(chatId).emit('success', chatId);
    }
  });

  socket.on('chat message', (data) => {
    io.sockets.in(data.chatId).emit('post message', data);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});


app.disable('x-powered-by');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use(bodyParser.json());
app.use(cookieParser());

// Expose public directory to client
app.use(express.static(path.join(__dirname, 'public')));

// REQUIRE IN ROUTERS
const chats = require('./routes/chats');
const givers = require('./routes/givers');
const places = require('./routes/places');
const token = require('./routes/token');
const users = require('./routes/users');

// ROUTE HANDLERS
app.use(chats);
app.use(givers);
app.use(places);
app.use(token);
app.use(users);

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {

  if (err.status || err.output && err.output.statusCode) {
    console.log(err);
    return res.status(err.status || err.output.statusCode).send(err);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

http.listen(port, () => {
  console.log('Listening on port,', port);
});

module.exports = app;
