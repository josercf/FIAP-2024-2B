const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

/**
 * @openapi
 * '/api/pedidos':
 *  post:
 *    tags:
 *    - Pedido Controller
 *    summary: Cria um novo pedido
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - cliente_id
 *              - itens
 *              - valor_pagamento
 *            properties:
 *              cliente_id:
 *                type: integer
 *                example: 1
 *              itens:
 *                type: array
 *                items:
 *                  type: object
 *                  required:
 *                    - produto_id
 *                    - quantidade
 *                    - preco_unitario
 *                  properties:
 *                    produto_id:
 *                      type: integer
 *                      example: 3
 *                    quantidade:
 *                      type: integer
 *                      example: 1
 *                    preco_unitario:
 *                      type: number
 *                      format: double
 *                      example: 100.00
 *              valor_pagamento:
 *                type: number
 *                format: double
 *                example: 400.00
 *    responses:
 *      200:
 *        description: Pedido criado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                pedido_id:
 *                  type: integer
 *                  example: 1
 *                cliente_id:
 *                  type: integer
 *                  example: 1
 *                data_pedido:
 *                  type: string
 *                  format: date-time
 *                  example: "2024-08-14T20:53:12.883Z"
 *                status_pedido:
 *                  type: string
 *                  example: "confirmado"
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
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
