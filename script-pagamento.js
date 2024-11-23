const confirmBtn = document.getElementById('confirmBtn');

// Evento ao clicar no botão Confirmar
confirmBtn.addEventListener('click', () => {
    const pixOption = document.getElementById('pix');
    const cartaoOption = document.getElementById('cartao');

    if (pixOption.checked) {
        // Redirecionar para a página do Pix
        window.location.href = 'pagamento_pix.html';
    } else if (cartaoOption.checked) {
        // Redirecionar para a página do Cartão
        window.location.href = 'pagamento_cartao.html';
    } else {
        alert('Por favor, selecione uma forma de pagamento.');
    }
});
