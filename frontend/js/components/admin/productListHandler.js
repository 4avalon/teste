// frontend/js/admin/productListHandler.js
console.log("productListHandler.js requisitado.");
import { editarProduto, excluirProduto, salvarProduto, novoProduto, cancelarEdicao } from './crud.js';

// Função para listar todos os produtos
export const listarProdutos = async () => {
    const produtosContainer = document.getElementById('lista-produtos');

    try {
        const response = await fetch('http://localhost:3000/api/produtosteste');
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
                    <div class="produto-item" data-id="${produto._id}">
                        <h4>${produto.nome}</h4>
                        <img src="frontend/assets/images/${produto.imagem}" alt="${produto.nome}">
                        <p>Preço: R$ ${produto.preco}</p>
                        <p>Estoque: ${produto.estoque}</p>
                        <button class="editar-produto">Editar</button>
                    </div>
                `;
                produtosContainer.appendChild(produtoElement);

                // Evento para editar o produto
                produtoElement.querySelector('.editar-produto').addEventListener('click', () => {
                    editarProduto(produto._id);
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
