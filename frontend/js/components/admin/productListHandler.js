// frontend/js/components/admin/productListHandler.js

console.log("productListHandler.js requisitado.");

// Função para listar os produtos
export const listarProdutos = async () => {
  const listaProdutosElement = document.getElementById('lista-produtos');
  
  try {
    const response = await fetch('http://localhost:3000/api/produtosteste');
    const produtos = await response.json();
    listaProdutosElement.innerHTML = '';

    produtos.forEach(produto => {
      const produtoElement = document.createElement('div');
      produtoElement.classList.add('produto');
      produtoElement.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p>Preço: R$ ${produto.preco}</p>
        <p>Estoque: ${produto.estoque}</p>
        <button onclick="editarProdutoAdmin('${produto._id}')">Editar</button>
      `;
      listaProdutosElement.appendChild(produtoElement);
    });
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    listaProdutosElement.innerHTML = '<p>Erro ao carregar produtos.</p>';
  }
};
