// teste/frontend/js/components/cartHandler.js

let carrinho = []; // Array para armazenar os itens do carrinho

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho(); // Atualiza a interface do carrinho sempre que um item é adicionado
    calcularTotal(); // Atualiza o total após adicionar o produto
}

// Função para remover um item do carrinho pelo índice
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
    calcularTotal(); // Atualiza o total após remover o produto
}

// Função para atualizar a exibição do carrinho na interface
function atualizarCarrinho() {
    const carrinhoContainer = document.getElementById('carrinho-container');
    carrinhoContainer.innerHTML = '';

    carrinho.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('carrinho-item');
        itemElement.innerHTML = `
            <p>${item.nome} - R$${item.preco}</p>
            <button class="remover-item" data-index="${index}">Remover</button>
        `;
        carrinhoContainer.appendChild(itemElement);
    });

    // Configura os eventos de remoção para cada botão
    document.querySelectorAll('.remover-item').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            removerDoCarrinho(index);
        });
    });
}

// Função para calcular o total dos itens no carrinho
function calcularTotal() {
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    const totalContainer = document.getElementById('total-container');
    totalContainer.textContent = `Total: R$${total.toFixed(2)}`;
}

// Exporta apenas as funções necessárias
export { adicionarAoCarrinho };
