// teste/frontend/js/main.js
import { adicionarAoCarrinho } from './components/cartHandler.js';

async function carregarProdutos() {
    try {
        console.log("Carregando produtos..."); // Log inicial para carregamento

        const response = await fetch('http://localhost:3000/produtos');
        if (!response.ok) {
            throw new Error(`Erro ao carregar produtos: ${response.statusText}`);
        }

        const produtos = await response.json();
        console.log("Produtos carregados:", produtos); // Log para ver os produtos carregados

        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        produtos.forEach(produto => {
            const produtoElement = document.createElement('div');
            produtoElement.classList.add('produto-item');
            produtoElement.innerHTML = `
                <img src="/teste/frontend/assets/images/${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p>Preço: R$${produto.preco}</p>
                <button class="adicionar-carrinho">Adicionar ao Carrinho</button>
            `;
            container.appendChild(produtoElement);

            // Evento de clique para adicionar ao carrinho com log
            produtoElement.querySelector('.adicionar-carrinho').addEventListener('click', () => {
                console.log("Botão 'Adicionar ao Carrinho' clicado para:", produto); // Log do produto adicionado
                adicionarAoCarrinho(produto); // Chama a função de adicionar ao carrinho
            });
        });

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

carregarProdutos();
