// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const produtoRoutes = require('./routes/produtoRoutes'); // Importa as rotas de produto

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());
app.use(cors()); // Middleware para permitir requisições do frontend

// Servir arquivos estáticos do diretório "frontend"
app.use('/teste', express.static('frontend')); // Ajustado para incluir '/teste'

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/teste_marketplace_produtos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas de produtos
app.use('/produtos', produtoRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
