// frontend/js/components/cartHandler.js

console.log("frontend/js/components/cartHandler.js requisitado.");  
// Função para adicionar produto ao carrinho
export const adicionarAoCarrinho = (produto) => {
  const carrinho = getCarrinho();
  
  // Verifica se o produto já existe no carrinho
  const produtoExistente = carrinho.find(item => item.id === produto.id);
  
  if (produtoExistente) {
    produtoExistente.quantidade += 1;  // Se já existe, aumenta a quantidade
  } else {
    produto.id = produto._id;  // Garantindo que o ID seja único
    produto.quantidade = 1;  // Se não existe, define a quantidade como 1
    carrinho.push(produto);  // Adiciona o produto ao carrinho
  }

  salvarCarrinho(carrinho);
  exibirCarrinho();
};

// Função para exibir o carrinho de compras
export const exibirCarrinho = () => {
  const carrinhoContainer = document.getElementById('carrinho-container');
  const carrinho = getCarrinho();
  carrinhoContainer.innerHTML = '';

  if (carrinho.length === 0) {
    carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
  } else {
    let total = 0;
    carrinho.forEach(item => {
      const itemCarrinho = document.createElement('div');
      itemCarrinho.classList.add('item-carrinho');
      itemCarrinho.innerHTML = `
        <p>${item.nome} - Quantidade: ${item.quantidade} - R$ ${item.preco * item.quantidade}</p>
      `;
      carrinhoContainer.appendChild(itemCarrinho);
      total += item.preco * item.quantidade;
    });

    const totalCarrinho = document.createElement('p');
    totalCarrinho.innerHTML = `Total: R$ ${total.toFixed(2)}`;
    carrinhoContainer.appendChild(totalCarrinho);
  }
};

// Função para limpar o carrinho
export const limparCarrinho = () => {
  localStorage.removeItem('carrinho');  // Limpa o carrinho do localStorage
  exibirCarrinho();  // Atualiza a exibição do carrinho
};

// Função para obter o carrinho do localStorage
const getCarrinho = () => {
  return JSON.parse(localStorage.getItem('carrinho')) || [];
};

// Função para salvar o carrinho no localStorage
const salvarCarrinho = (carrinho) => {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
};

