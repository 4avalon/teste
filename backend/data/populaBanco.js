// backend/data/populaBanco.js
const mongoose = require('mongoose');
const Produto = require('../models/produtoModel'); // Ajuste o caminho conforme necessário
const produtosData = require('./produtos.json'); // Verifique se o caminho do arquivo JSON está correto
const dbConfig = require('../config/dbConfig'); // Importa a configuração do banco

const populaBanco = async () => {
    try {
        await mongoose.connect(dbConfig.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await Produto.deleteMany({}); // Limpa a coleção de produtos antes de popular
        await Produto.insertMany(produtosData);
        console.log('Banco de dados populado com sucesso!');
    } catch (error) {
        console.error('Erro ao popular o banco de dados:', error);
    } finally {
        mongoose.connection.close();
    }
};

populaBanco();
