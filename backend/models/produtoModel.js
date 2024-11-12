// backend/models/produtoModel.js
console.log("backend/models/produtoModel.js requesitado");  


const mongoose = require('mongoose');

// Esquema do produto
const produtoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: String, required: true },
    estoque: { type: Number, required: true },
    imagem: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

// Exportando o modelo Produto
module.exports = mongoose.model('Produto', produtoSchema);

