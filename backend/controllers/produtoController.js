// backend/controllers/produtoController.js
const Produto = require('../models/produtoModel');

// Listar todos os produtos
exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar produtos' });
    }
};

// Adicionar um novo produto
exports.adicionarProduto = async (req, res) => {
    try {
        const novoProduto = new Produto(req.body);
        await novoProduto.save();
        res.status(201).json({ message: 'Produto adicionado com sucesso!', produto: novoProduto });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar produto', detalhes: error.message });
    }
};

// Obter um produto específico pelo ID
exports.obterProdutoPorId = async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter produto', detalhes: error.message });
    }
};

// Atualizar um produto pelo ID
exports.atualizarProduto = async (req, res) => {
    try {
        const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!produtoAtualizado) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json({ message: 'Produto atualizado com sucesso', produto: produtoAtualizado });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto', detalhes: error.message });
    }
};

// Deletar um produto pelo ID
exports.deletarProduto = async (req, res) => {
    try {
        const produtoDeletado = await Produto.findByIdAndDelete(req.params.id);
        if (!produtoDeletado) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar produto', detalhes: error.message });
    }
};
