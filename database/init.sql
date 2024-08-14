CREATE DATABASE IF NOT EXISTS ecommerce_db;

USE ecommerce_db;

CREATE TABLE Cliente (
    cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE Estoque (
    produto_id INT PRIMARY KEY AUTO_INCREMENT,
    quantidade_disponivel INT
);

CREATE TABLE Pedido (
    pedido_id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    data_pedido DATE,
    status_pedido VARCHAR(50),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(cliente_id)
);

CREATE TABLE ItemPedido (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT,
    produto_id INT,
    quantidade INT,
    preco_unitario FLOAT,
    FOREIGN KEY (pedido_id) REFERENCES Pedido(pedido_id),
    FOREIGN KEY (produto_id) REFERENCES Estoque(produto_id)
);

CREATE TABLE Pagamento (
    pagamento_id INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT,
    valor FLOAT,
    status_pagamento VARCHAR(50),
    data_pagamento DATE,
    FOREIGN KEY (pedido_id) REFERENCES Pedido(pedido_id)
);

-- Inserindo dados na tabela Cliente
INSERT INTO Cliente (nome, email) VALUES 
('José da Silva', 'jose.silva@example.com'),
('Maria Oliveira', 'maria.oliveira@example.com'),
('Carlos Pereira', 'carlos.pereira@example.com'),
('Ana Souza', 'ana.souza@example.com'),
('Paulo Santos', 'paulo.santos@example.com');

-- Inserindo dados na tabela Estoque
INSERT INTO Estoque (quantidade_disponivel) VALUES 
(1),  -- Produto 1
(200),  -- Produto 2
(150),  -- Produto 3
(80),   -- Produto 4
(120);  -- Produto 5

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

ALTER TABLE Estoque
ADD CONSTRAINT chk_quantidade_disponivel CHECK (quantidade_disponivel >= 0);
