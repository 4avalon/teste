// frontend/js/main.js
console.log("frontend/js/main.js requisitado.");


// Importar funções dos handlers
import { fetchProdutos } from './components/productHandler.js';
import { exibirCarrinho, limparCarrinho } from './components/cartHandler.js';
import { listarProdutos, carregarInformacoesBanco } from './components/adminHandler.js';


// Quando a página for carregada, busca os produtos e exibe o carrinho
document.addEventListener('DOMContentLoaded', () => {
  console.log("main.js requisitado.");
  carregarInformacoesBanco();
  console.log(carregarInformacoesBanco());
  // Exibe os produtos e o carrinho
  fetchProdutos(); // Chama a função para carregar os produtos
  exibirCarrinho(); // Exibe o carrinho carregado

  // Lida com o botão de limpar carrinho
  const botaoLimparCarrinho = document.getElementById('limpar-carrinho');
  botaoLimparCarrinho.addEventListener('click', () => {
    console.log("Carrinho limpo.");
    limparCarrinho();  // Chama a função para limpar o carrinho
  });

  // Verifica a página atual e carrega os produtos para a administração

    listarProdutos(); // Carrega os produtos no painel administrativo


});

// Eventos de administração de produtos (Novo, Editar, Excluir, Salvar)
import { editarProduto, excluirProduto, salvarProduto, novoProduto, cancelarEdicao } from './components/adminHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  // Eventos para os botões de ação no modelo
  document.getElementById('novo-produto').addEventListener('click', novoProduto);
  
  // Aqui, ao clicar no botão "Alterar", passamos um ID fictício
  document.getElementById('alterar-produto').addEventListener('click', () => {
    const produtoId = "ID_DO_PRODUTO"; // Substituir com o id do produto selecionado
    editarProduto(produtoId);
  });
  
  // Função de exclusão de produto
  document.getElementById('excluir-produto').addEventListener('click', () => {
    const produtoId = "ID_DO_PRODUTO"; // Substituir com o id do produto
    excluirProduto(produtoId);
  });

  // Evento para salvar as alterações do produto
  document.getElementById('salvar-produto').addEventListener('click', salvarProduto);

  // Evento para cancelar a edição
  document.getElementById('cancelar-produto').addEventListener('click', cancelarEdicao);
});
