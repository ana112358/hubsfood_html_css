// Selecionando elementos do DOM
const modal = document.getElementById('modal');
const loginBtn = document.getElementById('loginBtn');
const closeModalBtn = document.querySelector('.close-btn');

// Função para abrir o modal ao clicar no botão "Logar"
loginBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Função para fechar o modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal clicando fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
