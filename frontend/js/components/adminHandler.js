// frontend/js/components/adminHandler.js

// Função para cadastrar um novo produto
async function cadastrarProduto(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const produto = {
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
        preco: parseFloat(document.getElementById('preco').value),
        categoria: document.getElementById('categoria').value,
        estoque: parseInt(document.getElementById('estoque').value),
        imagem: document.getElementById('imagem').value
    };

    try {
        const response = await fetch('/api/produtos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        });
        
        if (response.ok) {
            alert('Produto cadastrado com sucesso!');
            carregarProdutosAdmin(); // Recarrega a lista de produtos na área admin
            document.getElementById('produto-form').reset(); // Limpa o formulário
        } else {
            alert('Erro ao cadastrar o produto');
        }
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
    }
}

// Função para carregar produtos na área administrativa
async function carregarProdutosAdmin() {
    try {
        const response = await fetch('/api/produtos');
        const produtos = await response.json();
        exibirProdutosAdmin(produtos);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

// Função para exibir produtos na área administrativa
function exibirProdutosAdmin(produtos) {
    const adminProdutosLista = document.getElementById('admin-produtos-lista');
    adminProdutosLista.innerHTML = ''; // Limpa o container

    produtos.forEach(produto => {
        const produtoElemento = document.createElement('div');
        produtoElemento.classList.add('produto-admin');
        produtoElemento.innerHTML = `
            <span>${produto.nome}</span>
            <button onclick="editarProduto('${produto._id}')">Editar</button>
            <button onclick="deletarProduto('${produto._id}')">Deletar</button>
        `;
        adminProdutosLista.appendChild(produtoElemento);
    });
}

// Função para deletar um produto
async function deletarProduto(produtoId) {
    try {
        const response = await fetch(`/api/produtos/${produtoId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            alert('Produto deletado com sucesso!');
            carregarProdutosAdmin(); // Recarrega a lista de produtos
        } else {
            alert('Erro ao deletar o produto');
        }
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
    }
}

// Função para editar um produto (básica; pode ser expandida)
function editarProduto(produtoId) {
    // Esta função pode carregar os dados no formulário para edição futura
    alert(`Funcionalidade de edição para o produto ID: ${produtoId} em desenvolvimento.`);
}

// Exporta as funções para serem usadas em main.js
export { cadastrarProduto, carregarProdutosAdmin };
