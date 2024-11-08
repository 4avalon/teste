// backend/controllers/produtoController.js
const Produto = require('../models/produtoModel'); // Certifique-se de que o caminho está correto para o seu model

// Função para adicionar um novo produto
const adicionarProduto = async (req, res) => {
    try {
        const { nome, preco, descricao, estoque, imagem } = req.body;
        const novoProduto = new Produto({ nome, preco, descricao, estoque, imagem });
        await novoProduto.save();
        res.status(201).json({ mensagem: 'Produto adicionado com sucesso!', produto: novoProduto });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao adicionar produto', error });
    }
};

// Função para listar todos os produtos
const listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar produtos', error });
    }
};

// Função para atualizar um produto por ID
const atualizarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const atualizacoes = req.body;
        const produtoAtualizado = await Produto.findByIdAndUpdate(id, atualizacoes, { new: true });
        if (!produtoAtualizado) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
        res.status(200).json({ mensagem: 'Produto atualizado com sucesso!', produto: produtoAtualizado });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao atualizar produto', error });
    }
};

// Função para deletar um produto por ID
const deletarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produtoDeletado = await Produto.findByIdAndDelete(id);
        if (!produtoDeletado) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
        res.status(200).json({ mensagem: 'Produto deletado com sucesso!', produto: produtoDeletado });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao deletar produto', error });
    }
};

module.exports = {
    adicionarProduto,
    listarProdutos,
    atualizarProduto,
    deletarProduto
};
