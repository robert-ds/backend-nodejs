const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

// const router = require("./components/message/network");
const router = require('./network/routes');

let app = express();
router(app);

// conection to db
db();

// app.use(router);
app.use(bodyParser.json()); // Uso de el el modulo para transformar las peticiones del body

// Servidor de Estaticos
app.use('/', express.static('public'));

// app.use('/', (req, res) => {
//   res.send('hola');
// });

app.listen(3000);
console.log("Server living port 3000");