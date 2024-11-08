// backend/data/populaBanco.js
const mongoose = require('mongoose');
const Produto = require('../models/produtoModel');
const produtos = require('./produtos.json'); // Caminho ajustado para o JSON

// URL de conexão com o MongoDB
const mongoURI = 'mongodb://localhost:27017/teste_marketplace_produtos';

// Função para conectar e inserir produtos
const populaBanco = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conectado ao MongoDB com sucesso');

        // Limpar a coleção de produtos antes de inserir novos
        await Produto.deleteMany({});
        console.log('Coleção de produtos limpa');

        // Inserir os produtos
        await Produto.insertMany(produtos);
        console.log('Produtos inseridos com sucesso');

        mongoose.connection.close();
    } catch (error) {
        console.error('Erro ao inserir produtos:', error);
        process.exit(1);
    }
};

// Executa a função
populaBanco();
