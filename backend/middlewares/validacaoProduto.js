// backend/middlewares/validacaoProduto.js
const { body, validationResult } = require('express-validator');

// Middleware de validação de dados para criação e atualização de produtos
exports.validarProduto = [
    body('nome').notEmpty().withMessage('O nome do produto é obrigatório'),
    body('preco').isFloat({ min: 0 }).withMessage('O preço deve ser um número positivo'),
    body('estoque').optional().isInt({ min: 0 }).withMessage('O estoque deve ser um número inteiro não negativo'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
