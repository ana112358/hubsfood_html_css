// Selecionando elementos do DOM
const modalLogin = document.getElementById('modal'); // Modal de login
const modalCadastro = document.getElementById('modal-cadastro'); // Modal de cadastro
const loginBtn = document.getElementById('loginBtn');
const closeModalLoginBtn = modalLogin.querySelector('.close-btn'); // Botão para fechar o modal de login
const closeModalCadastroBtn = modalCadastro.querySelector('.close-btn'); // Botão para fechar o modal de cadastro
const btnCriarConta = document.getElementById('criarConta'); // Botão para abrir o modal de cadastro

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

// Fechar o modal clicando fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modalLogin.style.display = 'none';
    }
    if (event.target === modalCadastro) {
        modalCadastro.style.display = 'none';
    }
});
