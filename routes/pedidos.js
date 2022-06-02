var express = require('express');
const pedidoService = require("../controllers/pedidosService");
var router = express.Router();


//route para el registro de pedido del cliente
router.post('/registrarPedido', pedidoService.insertPedidos);

//route para consultar los pedidos guardados
router.get('/consultarPedidos', pedidoService.consultPedidos);


module.exports = router;