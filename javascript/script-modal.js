// Selecionando elementos do DOM
const modalLogin = document.getElementById('modal'); // Modal de login
const modalCadastro = document.getElementById('modal-cadastro'); // Modal de cadastro
const modalCadastroConsumidor = document.getElementById('modal-cadastro-consumidor'); // Modal de cadastro de consumidor
const modalCadastroRestaurante = document.getElementById('modal-cadastro-restaurante'); // Modal de cadastro de restaurante
const loginBtn = document.getElementById('loginBtn');
const closeModalLoginBtn = modalLogin.querySelector('.close-btn'); // Botão para fechar o modal de login
const closeModalCadastroBtn = modalCadastro.querySelector('.close-btn'); // Botão para fechar o modal de cadastro
const closeModalCadastroConsumidorBtn = modalCadastroConsumidor.querySelector('.close-btn'); // Botão para fechar o modal de cadastro de consumidor
const closeModalCadastroRestauranteBtn = modalCadastroRestaurante.querySelector('.close-btn'); // Botão para fechar o modal de cadastro de restaurante
const btnCriarConta = document.getElementById('criarConta'); // Botão para abrir o modal de cadastro
const btnContinuar = document.getElementById('cadastrarContinuar'); // Botão de continuar no modal de cadastro
const checkboxConsumidor = document.getElementById('cadastroConsumidor'); 
const checkboxEmpresa = document.getElementById('cadastroEmpresa'); 
const finalizarCadastroBtn = document.getElementById('finalizarCadastroConsumidor');


// Função para abrir o modal ao clicar no botão "Logar"
loginBtn.addEventListener('click', () => {
    modalLogin.style.display = 'flex';
});
// Função para abrir o modal de cadastro ao clicar no botão "Criar Nova conta"
btnCriarConta.addEventListener('click', () => {
    modalLogin.style.display = 'none'; // Fecha o modal de login
    modalCadastro.style.display = 'flex'; // Abre o modal de cadastro
});

// Função para fechar o modal
closeModalLoginBtn.addEventListener('click', () => {
    modalLogin.style.display = 'none';
});


// Função para fechar o modal de cadastro
closeModalCadastroBtn.addEventListener('click', () => {
    modalCadastro.style.display = 'none';
});
closeModalCadastroConsumidorBtn.addEventListener('click', () => {
    modalCadastroConsumidor.style.display = 'none';
});

// Função para fechar o modal de cadastro de restaurante
closeModalCadastroRestauranteBtn.addEventListener('click', () => {
    modalCadastroRestaurante.style.display = 'none';
});

// Fechar o modal clicando fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modalLogin.style.display = 'none';
    }
    if (event.target === modalCadastro) {
        modalCadastro.style.display = 'none';
    }
    if (event.target === modalCadastroConsumidor) {
        modalCadastroConsumidor.style.display = 'none';
    }
    if (event.target === modalCadastroRestaurante) {
        modalCadastroRestaurante.style.display = 'none';
    }
});

// Função para validar o checkbox antes de continuar
btnContinuar.addEventListener('click', () => {
    if (checkboxConsumidor.checked) {
        // Aqui você pode adicionar a lógica para continuar com o processo, por exemplo:
        modalCadastroConsumidor.style.display = 'flex';
        modalCadastro.style.display = 'none'; // Fechar o modal de cadastro após continuar
    } else if(checkboxEmpresa.checked){
        modalCadastro.style.display = 'none';
        modalCadastroRestaurante.style.display = 'flex';
    } else {
        alert('Por favor, marque a opção de concordar antes de continuar.');
    }
});

document.addEventListener('DOMContentLoaded', function () {

    
    // Adiciona um evento de clique ao botão
    finalizarCadastroBtn.addEventListener('click', function () {
        // Redireciona para a página indexLogado.html
        window.location.href = '../../templates/usuarioCliente/indexLogado.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão "Finalizar Cadastro"
    const finalizarCadastroRestaurante = document.getElementById('finalizarCadastroRestaurante');

    // Adiciona um evento de clique ao botão
    finalizarCadastroRestaurante.addEventListener('click', function() {
        // Redireciona para a página perfilEstabelecimento.html
        window.location.href = '../../templates/usuarioRestaurante/perfilEstabelecimento.html';
    });
});