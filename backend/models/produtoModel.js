// backend/models/produtoModel.js
// backend/models/produtoModel.js
const mongoose = require('mongoose');

// Definindo o schema do produto
const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    descricao: {
        type: String,
        trim: true,
    },
    preco: {
        type: Number,
        required: true,
        min: 0,
    },
    categoria: {
        type: String,
        trim: true,
    },
    estoque: {
        type: Number,
        required: true,
        min: 0,
        default: 0, // Definindo estoque padrão como 0
    },
    imagem: {
        type: String, // URL da imagem do produto
        trim: true,
    },
    dataCriacao: {
        type: Date,
        default: Date.now,
    },
});

// Criando o modelo do produto com o schema definido
const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
