// frontend/js/components/productHandler.js

console.log("frontend/js/components/productHandler.js requisitado.");  
// frontend/js/components/admin/adminHandler.js
import { editarProduto, excluirProduto, salvarProduto, novoProduto } from './crud.js';
import { carregarInformacoesBanco } from './infoDB.js';
import { listarProdutos } from './productListHandler.js';

console.log("adminHandler.js requisitado.");

// Função para carregar as informações do banco de dados
export const carregarInformacoesBancoFrontend = () => {
  carregarInformacoesBanco();
};

// Função para listar todos os produtos no painel administrativo
export const listarProdutosAdmin = () => {
  listarProdutos();
};

// Função para editar um produto
export const editarProdutoAdmin = (produtoId) => {
  editarProduto(produtoId);
};

// Função para excluir um produto
export const excluirProdutoAdmin = (produtoId) => {
  excluirProduto(produtoId);
};

// Função para salvar alterações ou novo produto
export const salvarProdutoAdmin = () => {
  salvarProduto();
};

// Função para criar um novo produto
export const novoProdutoAdmin = () => {
  novoProduto();
};

document.addEventListener('DOMContentLoaded', () => {
  carregarInformacoesBancoFrontend();
  listarProdutosAdmin();
});
