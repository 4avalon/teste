// frontend/js/components/adminHandler.js
console.log("adminHandler.js requisitado.");

// Importando funções de CRUD, informações do banco e listagem de produtos
//import { editarProdutoAdmin, excluirProdutoAdmin, salvarProdutoAdmin, novoProduto, cancelarEdicaoAdmin } from './admin/crud.js';
import { editarProduto, excluirProduto, salvarProduto, novoProduto, cancelarEdicao } from './admin/crud.js';
import { carregarInformacoesBanco } from './admin/infoDB.js';
import { listarProdutos } from './admin/productListHandler.js';

// Função para carregar as informações do banco de dados
export const carregarInformacoesBancoAdmin = () => {
    carregarInformacoesBanco();  // Chama a função de infoDB.js para buscar as informações do banco
};

// Função para listar todos os produtos no painel administrativo
export const listarProdutosAdmin = () => {
    listarProdutos();  // Chama a função de productListHandler.js para listar os produtos
};

// Função para editar um produto
export const editarProdutoAdmin = (produtoId) => {
    editarProduto(produtoId);  // Chama a função de crud.js para editar um produto
};

// Função para excluir um produto
export const excluirProdutoAdmin = (produtoId) => {
    excluirProduto(produtoId);  // Chama a função de crud.js para excluir um produto
};

// Função para salvar alterações ou novo produto
export const salvarProdutoAdmin = () => {
    salvarProduto();  // Chama a função de crud.js para salvar um produto
};

// Função para cancelar edição
export const cancelarEdicaoAdmin = () => {
    cancelarEdicao();  // Chama a função de crud.js para cancelar edição
};
