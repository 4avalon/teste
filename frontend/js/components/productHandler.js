// frontend/js/components/productHandler.js

import { adicionarAoCarrinho } from './cartHandler.js'; // Importação adicionada

// Função para buscar produtos da API
async function carregarProdutos() {
    try {
        const response = await fetch('/api/produtos');
        const produtos = await response.json();
        exibirProdutos(produtos);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

// Função para exibir produtos na seção da loja
function exibirProdutos(produtos) {
    const produtosContainer = document.getElementById('produtos-container');
    produtosContainer.innerHTML = ''; // Limpa o container

    produtos.forEach(produto => {
        const produtoElemento = document.createElement('div');
        produtoElemento.classList.add('produto');
        produtoElemento.innerHTML = `
            <img src="frontend/assets/images/${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto._id}')">Adicionar ao Carrinho</button>
        `;
        produtosContainer.appendChild(produtoElemento);
    });
}

export { carregarProdutos };
