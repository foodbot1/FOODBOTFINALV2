const express = require('express');
const path = require('path');
const pagamentoRoutes = require('./routespagamento.cjs');

const app = express();
const PORT = process.env.PORT || 3000;

// servir index.html na rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/', pagamentoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
