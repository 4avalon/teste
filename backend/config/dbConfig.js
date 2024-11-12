// backend/config/dbConfig.js

console.log("backend/config/dbConfig.js requesitado");  

require('dotenv').config();

const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/produtoteste'; 
console.log('Usando o banco de dados:', dbURI); 

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('Conectado ao MongoDB.');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
        process.exit(1); 
    }
};

module.exports = connectDB;
