const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

/**
 * @openapi
 * '/api/pedidos':
 *  get:
 *     tags:
 *     - Pedido Controller
 *     summary: Lista todos os pedidos realizados
 *     responses:
 *       200:
 *         description: Obtem a lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   PedidoID:
 *                     type: integer
 *                     example: 3
 *                   NomeCliente:
 *                     type: string
 *                     example: "José da Silva"
 *                   DataPedido:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-14T00:00:00.000Z"
 *                   StatusPedido:
 *                     type: string
 *                     example: "confirmado"
 *                   ItemID:
 *                     type: integer
 *                     example: 5
 *                   ProdutoID:
 *                     type: integer
 *                     example: 3
 *                   Quantidade:
 *                     type: integer
 *                     example: 1
 *                   PrecoUnitario:
 *                     type: number
 *                     format: double
 *                     example: 200
 *                   TotalItem:
 *                     type: number
 *                     format: double
 *                     example: 200
 *                   ValorPagamento:
 *                     type: number
 *                     format: double
 *                     example: 400
 *                   StatusPagamento:
 *                     type: string
 *                     example: "aprovado"
 *                   DataPagamento:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-14T00:00:00.000Z"
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */
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
