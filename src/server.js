const swaggerDocs = require('./swagger.js');
const express = require('express');
const bodyParser = require('body-parser');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api', pedidoRoutes);

const port = process.env.PORT || 3000;

try {
  app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
  })
  swaggerDocs(app, port)
} catch (error) {
  console.log('Cannot connect to the server')
}
 