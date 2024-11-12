// backend/data/addProdutos.js
console.log("backend/data/addProdutos.js requisitado");


const mongoose = require('mongoose');
const Produto = require('../models/produtoModel');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/produtoteste';
mongoose.connect(dbURI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

// Produtos que serão adicionados
const produtos = [
    {
        nome: 'Cafeteira',
        descricao: 'Cafeteira prática e funcional para preparar seu café.',
        preco: 149.00,
        categoria: 'Eletrônicos',
        estoque: 10,
        imagem: 'cafeteira.jpg'
    },
    {
        nome: 'Halter',
        descricao: 'Halter ideal para exercícios de musculação.',
        preco: 59.90,
        categoria: 'Esporte',
        estoque: 20,
        imagem: 'halter.jpg'
    },
    {
        nome: 'Perfume',
        descricao: 'Perfume com fragrância agradável para uso diário.',
        preco: 99.00,
        categoria: 'Cosméticos',
        estoque: 15,
        imagem: 'perfume.jpg'
    },
    {
        nome: 'Smartphone',
        descricao: 'Smartphone com câmera de alta qualidade.',
        preco: 2499.00,
        categoria: 'Eletrônicos',
        estoque: 5,
        imagem: 'smartphone.jpg'
    },
    {
        nome: 'Cadeira Ergonômica',
        descricao: 'Cadeira ergonômica para longas horas de trabalho.',
        preco: 399.90,
        categoria: 'Móveis',
        estoque: 8,
        imagem: 'cadeira.jpg'
    }
];

// Adicionando os produtos no banco de dados
Produto.insertMany(produtos)
    .then(() => {
        console.log('Produtos inseridos com sucesso!');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Erro ao inserir produtos:', error);
        mongoose.connection.close();
    });
