CREATE VIEW vw_pedidos_realizados AS
SELECT
    p.pedido_id AS PedidoID,
    c.nome AS NomeCliente,
    p.data_pedido AS DataPedido,
    p.status_pedido AS StatusPedido,
    ip.item_id AS ItemID,
    e.produto_id AS ProdutoID,
    ip.quantidade AS Quantidade,
    ip.preco_unitario AS PrecoUnitario,
    (ip.quantidade * ip.preco_unitario) AS TotalItem,
    pg.valor AS ValorPagamento,
    pg.status_pagamento AS StatusPagamento,
    pg.data_pagamento AS DataPagamento
FROM
    Pedido p
    INNER JOIN Cliente c ON p.cliente_id = c.cliente_id
    INNER JOIN ItemPedido ip ON p.pedido_id = ip.pedido_id
    INNER JOIN Estoque e ON ip.produto_id = e.produto_id
    LEFT JOIN Pagamento pg ON p.pedido_id = pg.pedido_id;
