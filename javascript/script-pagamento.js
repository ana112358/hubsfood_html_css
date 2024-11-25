const confirmBtn = document.getElementById('pagar');

// Evento ao clicar no botão Confirmar
confirmBtn.addEventListener('click', () => {
    const pixOption = document.getElementById('pix');
    const cartaoOption = document.getElementById('cartao');

    if (pixOption.checked) {
        // Redirecionar para a página do Pix
        window.location.href = 'pix.html';
    } else if (cartaoOption.checked) {
        // Redirecionar para a página do Cartão
        window.location.href = 'cartao.html';
    } else {
        alert('Por favor, selecione uma forma de pagamento.');
    }
});
