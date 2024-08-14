const express = require('express');
const bodyParser = require('body-parser');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api', pedidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
