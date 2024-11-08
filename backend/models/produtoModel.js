// backend/models/produtoModel.js
const mongoose = require('mongoose');

// Definindo o esquema para o produto
const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        required: true,
        min: 0
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    estoque: {
        type: Number,
        required: true,
        min: 0
    },
    imagem: {
        type: String,
        required: true,
        trim: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
});

// Criando o modelo Produto com base no esquema
module.exports = mongoose.model('Produto', produtoSchema);
