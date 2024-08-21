const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.post('/pedidos', pedidoController.realizarPedido);

/**
 * @openapi
 * '/api/pedidos':
 *  get:
 *     tags:
 *     - Pedido Controller
 *     summary: Lista todos os pedidos realizados
 *     responses:
 *      200:
 *        description: Obtem a lista de pedidos
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get('/pedidos', pedidoController.verPedidos);

module.exports = router;
