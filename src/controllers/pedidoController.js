const pool = require('../config/database');

exports.realizarPedido = async (req, res) => {
  const { cliente_id, itens, valor_pagamento } = req.body;

  // Iniciar uma transação
  const connection = await pool.getConnection();
  
  
  try {


    // Inserir o pedido
    const [pedidoResult] = await connection.query(
      'INSERT INTO Pedido (cliente_id, data_pedido, status_pedido) VALUES (?, NOW(), ?)',
      [cliente_id, 'pendente']
    );

    const pedido_id = pedidoResult.insertId; // Recupera o ID do pedido criado

    // Inserir itens do pedido e atualizar o estoque
    for (let item of itens) {
      // Verificar quantidade disponível no estoque
      const [estoqueResult] = await connection.query(
        'SELECT quantidade_disponivel FROM Estoque WHERE produto_id = ?',
        [item.produto_id]
      );

      if (estoqueResult[0].quantidade_disponivel < item.quantidade) {
        await connection.rollback(); // Reverter a transação em caso de erro
        return res.status(400).json({ error: 'Estoque insuficiente' });
      }

      // Inserir o item do pedido
      await connection.query(
        'INSERT INTO ItemPedido (pedido_id, produto_id, quantidade, preco_unitario) VALUES (?, ?, ?, ?)',
        [pedido_id, item.produto_id, item.quantidade, item.preco_unitario]
      );

      // Atualizar o estoque
      await connection.query(
        'UPDATE Estoque SET quantidade_disponivel = quantidade_disponivel - ? WHERE produto_id = ?',
        [item.quantidade, item.produto_id]
      );
    }

    // Registrar o pagamento
    await connection.query(
      'INSERT INTO Pagamento (pedido_id, valor, status_pagamento, data_pagamento) VALUES (?, ?, ?, NOW())',
      [pedido_id, valor_pagamento, 'aprovado']
    );

    // Atualizar o status do pedido para confirmado
    await connection.query(
      'UPDATE Pedido SET status_pedido = ? WHERE pedido_id = ?',
      ['confirmado', pedido_id]
    );

    connection.release();

    res.status(201).json({ message: 'Pedido realizado com sucesso!', pedido_id: pedido_id });
  } catch (error) {
    console.error("Erro ao realizar pedido:", error);

    res.status(500).json({ error: 'Erro ao realizar pedido' });
  }
};

exports.verPedidos = async (req, res) => {
  try {
    console.error("Buscando pedidos...");
    const [rows] = await pool.query('SELECT * FROM vw_pedidos_realizados');
    res.status(200).json(rows);
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
};
