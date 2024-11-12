// frontend/js/admin/crud.js
console.log("crud.js requisitado.");
// frontend/js/components/admin/crud.js

console.log("crud.js requisitado.");

// Função para adicionar ou editar um produto
export const salvarProduto = async () => {
  const nome = document.getElementById('nome-produto').value;
  const descricao = document.getElementById('descricao-produto').value;
  const preco = document.getElementById('preco-produto').value;
  const estoque = document.getElementById('estoque-produto').value;

  const produto = { nome, descricao, preco, estoque };

  const produtoId = document.getElementById('produto-id').value; // Caso exista um produto a ser editado

  let url = 'http://localhost:3000/api/produtosteste';
  let method = 'POST';

  if (produtoId) {
    url = `http://localhost:3000/api/produtosteste/${produtoId}`;
    method = 'PUT'; // Caso seja edição
  }

  try {
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(produto)
    });

    if (!response.ok) throw new Error('Erro ao salvar produto');
    alert('Produto salvo com sucesso');
  } catch (error) {
    console.error(error);
    alert('Erro ao salvar produto');
  }
};

// Função para excluir um produto
export const excluirProduto = async (produtoId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/produtosteste/${produtoId}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Erro ao excluir produto');
    alert('Produto excluído com sucesso');
  } catch (error) {
    console.error(error);
    alert('Erro ao excluir produto');
  }
};

// Função para preencher os campos com os dados de um produto existente
export const editarProduto = async (produtoId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/produtosteste/${produtoId}`);
    const produto = await response.json();

    document.getElementById('nome-produto').value = produto.nome;
    document.getElementById('descricao-produto').value = produto.descricao;
    document.getElementById('preco-produto').value = produto.preco;
    document.getElementById('estoque-produto').value = produto.estoque;
    document.getElementById('produto-id').value = produto._id; // Preenche o id do produto
  } catch (error) {
    console.error('Erro ao editar produto', error);
    alert('Erro ao editar produto');
  }
};

// Função para criar um novo produto
export const novoProduto = () => {
  document.getElementById('nome-produto').value = '';
  document.getElementById('descricao-produto').value = '';
  document.getElementById('preco-produto').value = '';
  document.getElementById('estoque-produto').value = '';
  document.getElementById('produto-id').value = ''; // Limpar o campo de ID
};
