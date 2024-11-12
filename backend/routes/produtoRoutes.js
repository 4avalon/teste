// backend/routes/produtoRoutes.js
console.log("backend/routes/produtoRoutes.js requisitado");

const express = require('express');
const Produto = require('../models/produtoModel');
const router = express.Router();

// Middleware para verificar se o produto existe
const verificarProduto = async (req, res, next) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    req.produto = produto;
    next();
  } catch (err) {
    res.status(500).json({ message: "Erro ao encontrar o produto", error: err });
  }
};

// Rota para listar todos os produtos
router.get('/produtosteste', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error: err });
  }
});

// Rota para obter um produto específico
router.get('/produtosteste/:id', verificarProduto, (req, res) => {
  res.json(req.produto);
});

module.exports = router;
