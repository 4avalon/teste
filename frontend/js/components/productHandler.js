// frontend/js/components/productHandler.js

console.log("frontend/js/components/productHandler.js requisitado.");  

//const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/produtosteste'; 
const apiUrl = 'http://localhost:3000/api/produtosteste'; 

 // Valor padrão, caso não tenha no .env
import { adicionarAoCarrinho } from './cartHandler.js';

export const fetchProdutos = async () => {
  const produtosContainer = document.getElementById('produtos-container');
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Erro ao buscar os produtos');
    }
    const produtos = await response.json();

    produtosContainer.innerHTML = '';

    if (produtos.length > 0) {
      produtos.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto');
        produtoElement.innerHTML = `
          <h3>${produto.nome}</h3>
          <img src="frontend/assets/images/${produto.imagem}" alt="${produto.nome}">
          <p>${produto.descricao}</p>
          <p><strong>R$ ${produto.preco}</strong></p>
          <button class="adicionar-carrinho">
            <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
          </button>
        `;
        produtosContainer.appendChild(produtoElement);

        // Adiciona evento de clique para adicionar ao carrinho
        const botaoAdicionarCarrinho = produtoElement.querySelector('.adicionar-carrinho');
        botaoAdicionarCarrinho.addEventListener('click', () => {
          console.log(`Produto ${produto.nome} adicionado ao carrinho.`);
          adicionarAoCarrinho(produto);
        });
      });
    } else {
      produtosContainer.innerHTML = '<p>Nenhum produto disponível.</p>';
    }
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    produtosContainer.innerHTML = '<p>Ocorreu um erro ao carregar os produtos.</p>';
  }
};
