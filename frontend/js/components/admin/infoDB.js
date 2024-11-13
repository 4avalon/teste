// frontend/js/admin/infoDB.js
console.log("infoDB.js requisitado.");

// Função para carregar as informações do banco de dados
export const carregarInformacoesBanco = async () => {
    const bancoDeDadosElement = document.getElementById('banco-dados');
    const apiUrlElement = document.getElementById('api-url');

    try {
        const response = await fetch('http://localhost:3000/api/informacoes'); // Requisição para o backend
        if (!response.ok) {
            throw new Error('Erro ao carregar informações do banco');
        }

        const data = await response.json();
        bancoDeDadosElement.textContent = `Banco de Dados: ${data.bancoDeDados}`;
        apiUrlElement.textContent = `URL da API: ${data.apiUrl}`;
    } catch (error) {
        console.error('Erro ao carregar informações:', error);
        bancoDeDadosElement.textContent = 'Erro ao carregar banco de dados';
        apiUrlElement.textContent = 'Erro ao carregar URL';
    }
};
