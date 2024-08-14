const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.post('/pedidos', pedidoController.realizarPedido);
router.get('/pedidos', pedidoController.verPedidos);

module.exports = router;
