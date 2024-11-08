// backend/middlewares/validacaoProduto.js

// Middleware para validar os dados do produto
const validarProduto = (req, res, next) => {
    const { nome, preco, descricao, estoque, imagem } = req.body;

    if (!nome || !preco || !descricao || estoque === undefined) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    next(); // Se tudo estiver correto, segue para o próximo middleware ou rota
};

module.exports = validarProduto;
