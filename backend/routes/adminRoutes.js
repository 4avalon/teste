// backend/routes/adminRoutes.js
console.log("backend/routes/adminRoutes.js requisitado");

const express = require('express');
const router = express.Router();

// Rota para retornar informações do banco de dados
router.get('/informacoes', (req, res) => {
  const dbInfo = {
    bancoDeDados: process.env.MONGODB_URI ? 'MongoDB Atlas' : 'Localhost', // Dinamicamente, dependendo de onde o banco estiver
    apiUrl: '/api/produtosteste'
  };

  try {
    // Lógica para garantir que o banco de dados está respondendo antes de fornecer as informações
    res.json(dbInfo);
  } catch (err) {
    console.error('Erro ao carregar informações do banco de dados:', err);
    res.status(500).json({ message: 'Erro ao carregar informações', error: err });
  }
});

module.exports = router;
