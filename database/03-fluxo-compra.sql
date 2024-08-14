-- Passo 1: Verificar estoque para o produto com ID 1
SELECT quantidade_disponivel 
FROM Estoque 
WHERE produto_id = 1;

-- Passo 2: Inserir o pedido
INSERT INTO Pedido (cliente_id, data_pedido, status_pedido)
VALUES (1, CURDATE(), 'pendente');

-- Recuperar o ID do pedido gerado
SELECT LAST_INSERT_ID() INTO @pedido_id;

-- Passo 3: Inserir os itens do pedido
INSERT INTO ItemPedido (pedido_id, produto_id, quantidade, preco_unitario)
VALUES (@pedido_id, 1, 2, 100.00); -- Exemplo para Produto 1

-- Passo 4: Atualizar o estoque
UPDATE Estoque 
SET quantidade_disponivel = quantidade_disponivel - 2
WHERE produto_id = 1;

-- Passo 5: Registrar o pagamento
INSERT INTO Pagamento (pedido_id, valor, status_pagamento, data_pagamento)
VALUES (@pedido_id, 200.00, 'aprovado', CURDATE());

-- Passo 6: Atualizar o status do pedido
UPDATE Pedido 
SET status_pedido = 'confirmado'
WHERE pedido_id = @pedido_id;
