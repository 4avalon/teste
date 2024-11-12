// frontend/js/main.js
console.log("frontend/js/main.js requisitado.");

// Importando funções de adminHandler.js
import { listarProdutosAdmin, carregarInformacoesBancoAdmin } from './components/adminHandler.js';
import { fetchProdutos } from './components/productHandler.js';
import { exibirCarrinho, limparCarrinho } from './components/cartHandler.js';

// Quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
  console.log("main.js requisitado.");

  // Carregar informações do banco e listar os produtos
  carregarInformacoesBancoAdmin();  // Carregar as informações do banco de dados
  listarProdutosAdmin();  // Carregar a lista de produtos no painel administrativo

  // Exibe os produtos e o carrinho
  fetchProdutos(); // Chama a função para carregar os produtos
  exibirCarrinho(); // Exibe o carrinho carregado

  // Lida com o botão de limpar carrinho
  const botaoLimparCarrinho = document.getElementById('limpar-carrinho');
  botaoLimparCarrinho.addEventListener('click', () => {
    console.log("Carrinho limpo.");
    limparCarrinho();  // Chama a função para limpar o carrinho
  });
});
