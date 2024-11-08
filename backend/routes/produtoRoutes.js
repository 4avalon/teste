// backend/routes/produtoRoutes.js
// backend/routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para listar todos os produtos (GET)
router.get('/', produtoController.listarProdutos);

// Rota para adicionar um novo produto (POST)
router.post('/', produtoController.adicionarProduto);

// Rota para buscar um produto específico pelo ID (GET)
router.get('/:id', produtoController.obterProdutoPorId);

// Rota para atualizar um produto pelo ID (PUT)
router.put('/:id', produtoController.atualizarProduto);

// Rota para deletar um produto pelo ID (DELETE)
router.delete('/:id', produtoController.deletarProduto);

module.exports = router;
