// backend/server.js
// isso ai

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const produtoRoutes = require('./routes/produtoRoutes');
const dbConfig = require('./config/dbConfig'); 


const app = express();
const PORT = process.env.SERVER_PORT || 3000;


// Middleware para JSON e CORS
app.use(express.json());
app.use(cors());

// Servir arquivos estáticos do frontend (ajuste o caminho se necessário)
app.use('/teste', express.static('frontend'));

// Conexão com o MongoDB usando a URL do dbConfig.js
mongoose.connect(dbConfig.mongoURI, {
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
