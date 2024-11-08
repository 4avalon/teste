// backend/routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para listar todos os produtos
router.get('/', produtoController.listarProdutos);

// Rota para adicionar um novo produto
router.post('/', produtoController.adicionarProduto);

// Rota para atualizar um produto existente por ID
router.put('/:id', produtoController.atualizarProduto);

// Rota para deletar um produto por ID
router.delete('/:id', produtoController.deletarProduto);

module.exports = router;

