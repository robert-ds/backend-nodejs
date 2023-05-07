const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const config = require('./config');

const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const socket = require('./socket');

socket.connect(server);

// const router = require("./components/message/network");
const router = require('./network/routes');

router(app);

// conection to db
db();

app.use(cors());

// app.use(router);
app.use(bodyParser.json()); // Uso de el el modulo para transformar las peticiones del body
app.use(bodyParser.urlencoded({extended: false}));

// Servidor de Estaticos
app.use('/', express.static('public'));

// app.use('/', (req, res) => {
//   res.send('hola');
// });

server.listen(config.port, () => {
  console.log("Server living " + config.host +":" + config.port);
});