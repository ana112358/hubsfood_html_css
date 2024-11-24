// Selecionando elementos do DOM
const modalCadastro = document.getElementById('modal-cadastro');
const modalCadastroConsumidor = document.getElementById('modal-cadastro-consumidor');
const modalCadastroRestaurante = document.getElementById('modal-cadastro-restaurante');
const closeModalCadastroBtn = modalCadastro.querySelector('.close-btn');
const closeModalConsumidorBtn = modalCadastroConsumidor.querySelector('.close-btn');
const closeModalRestauranteBtn = modalCadastroRestaurante.querySelector('.close-btn');
const btnContinuar = document.getElementById('cadastrarContinuar');

// Seleção dos inputs de rádio
const radioConsumidor = document.getElementById('cadastroConsumidor');
const radioEmpresa = document.getElementById('cadastroEmpresa');

// Função para abrir o modal correto ao clicar em "Continuar"
btnContinuar.addEventListener('click', () => {
    if (radioConsumidor.checked) {
        modalCadastro.style.display = 'none'; // Fecha o modal de escolha
        modalCadastroConsumidor.style.display = 'flex'; // Abre o modal de cadastro de consumidor
    } else if (radioEmpresa.checked) {
        modalCadastro.style.display = 'none'; // Fecha o modal de escolha
        modalCadastroRestaurante.style.display = 'flex'; // Abre o modal de cadastro de restaurante
    } else {
        alert("Por favor, selecione uma opção (Consumidor ou Empresa)."); // Mensagem se nenhum radio for selecionado
    }
});

// Funções para fechar os modais
closeModalCadastroBtn.addEventListener('click', () => {
    modalCadastro.style.display = 'none';
});
closeModalConsumidorBtn.addEventListener('click', () => {
    modalCadastroConsumidor.style.display = 'none';
    modalCadastro.style.display = 'flex'; // Reabre o modal de escolha
});
closeModalRestauranteBtn.addEventListener('click', () => {
    modalCadastroRestaurante.style.display = 'none';
    modalCadastro.style.display = 'flex'; // Reabre o modal de escolha
});

// Fechar os modais ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === modalCadastro) {
        modalCadastro.style.display = 'none';
    }
    if (event.target === modalCadastroConsumidor) {
        modalCadastroConsumidor.style.display = 'none';
        modalCadastro.style.display = 'flex'; // Reabre o modal de escolha
    }
    if (event.target === modalCadastroRestaurante) {
        modalCadastroRestaurante.style.display = 'none';
        modalCadastro.style.display = 'flex'; // Reabre o modal de escolha
    }
});
