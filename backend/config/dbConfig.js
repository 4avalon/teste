// backend/config/dbConfig.js
const mongoose = require('mongoose');

// URL de conexão com o MongoDB
const mongoURI = 'mongodb://localhost:27017/teste_marketplace_produtos';

// Função para conectar ao MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1); // Encerra o processo em caso de erro de conexão
    }
};

module.exports = connectDB;
