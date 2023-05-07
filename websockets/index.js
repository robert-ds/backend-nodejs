const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log("New Client Conected");
  socket.emit('Message', 'Welcome!');
});

setInterval(() => {
  io.emit('message', 'Hello to alls');
}, 3000);

server.listen(8080);
console.log('Server listen port 8080');

