// backend/server.js

console.log("backend/server.js requisitado");

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/dbConfig');
const produtoRoutes = require('./routes/produtoRoutes');
const adminRoutes = require('./routes/adminRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Conectando ao banco de dados
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Serve arquivos estáticos da pasta 'frontend'
app.use(express.static(path.join(__dirname, 'frontend')));

// Rotas da API
// Configuração das rotas
app.use('/api', adminRoutes);  // A rota "/informacoes" está sendo usada dentro de "/api"
app.use('/api', produtoRoutes);

// Middleware para logs de rotas
app.use('/api', (req, res, next) => {
    console.log(`Rota ${req.originalUrl} acessada`);
    next();
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});