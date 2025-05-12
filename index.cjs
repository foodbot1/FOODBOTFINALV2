const express = require('express');
const pagamentoRoutes = require('./routespagamento.cjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', pagamentoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
