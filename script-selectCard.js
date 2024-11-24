const cardDropdown = document.getElementById('cardDropdown');
const payButton = document.getElementById('payButton');
const confirmationMessage = document.getElementById('confirmationMessage');

// Evento ao clicar no botão "Pagar"
payButton.addEventListener('click', () => {
    const selectedCard = cardDropdown.value;

    if (selectedCard) {
        // Simula um processamento de pagamento
        confirmationMessage.textContent = `Pagamento com o cartão ${selectedCard.toUpperCase()} processado com sucesso!`;
        confirmationMessage.classList.remove('hidden');
    } else {
        alert('Por favor, selecione um cartão.');
    }
});
