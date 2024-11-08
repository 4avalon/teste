// backend/config/dbConfig.js
const mongoose = require('mongoose');
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

// Usa a URI do MongoDB definida no .env ou constrói uma URI alternativa
const dbURI = process.env.MONGODB_URI || `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// Função de conexão com o MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1); // Encerra o processo em caso de erro
    }
};

module.exports = connectDB;
