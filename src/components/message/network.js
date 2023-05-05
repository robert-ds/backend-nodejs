const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  controller.getMessages()
    .then((messageList) => {
      response.success(req,res,messageList,200)
    })
    .catch(e => {
      response.error(req,res,'Unexpected Error', 500, e);
    });
});

router.post('/', (req, res) => {

  controller.addMessage(req.body.user, res.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req,res, "Información invalida", 400, "Error en el controlador");
    });

});

router.put('/', (req, res) => {
  res.send("Mensaje actualizado");
});

router.delete('/', (req, res) => {
  console.log(req.query); // Petición tipo query de url
  console.log(req.body); // Petición del body del cliente
  res.send("Mensaje Eliminado");
});

module.exports = router;