const { Pedido, Cliente, Estoque, ItemPedido, Pagamento } = require('../models');

exports.realizarPedido = async (req, res) => {
  const { cliente_id, itens, valor_pagamento } = req.body;

  try {
    const pedido = await Pedido.create({
      cliente_id: cliente_id,
      data_pedido: new Date(),
      status_pedido: 'pendente'
    });

    for (let item of itens) {
      const estoque = await Estoque.findByPk(item.produto_id);
      if (estoque.quantidade_disponivel < item.quantidade) {
        return res.status(400).json({ error: 'Estoque insuficiente' });
      }

      await ItemPedido.create({
        pedido_id: pedido.id,
        produto_id: item.produto_id,
        quantidade: item.quantidade,
        preco_unitario: item.preco_unitario
      });

      estoque.quantidade_disponivel -= item.quantidade;
      await estoque.save();
    }

    await Pagamento.create({
      pedido_id: pedido.id,
      valor: valor_pagamento,
      status_pagamento: 'aprovado',
      data_pagamento: new Date()
    });

    pedido.status_pedido = 'confirmado';
    await pedido.save();

    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar pedido' });
  }
};

exports.verPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      include: [
        { model: Cliente },
        { model: ItemPedido, include: [Estoque] },
        { model: Pagamento }
      ]
    });
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
};
