// Função para salvar dados no localStorage
function salvarRestauranteAutorizado(dados) {
    // Recupera os dados existentes
    const restaurantesAutorizados = JSON.parse(localStorage.getItem('restaurantesAutorizados')) || [];

    // Adiciona o novo restaurante
    restaurantesAutorizados.push(dados);

    // Salva de volta no localStorage
    localStorage.setItem('restaurantesAutorizados', JSON.stringify(restaurantesAutorizados));
}

// Adiciona eventos aos botões
document.querySelectorAll('.autorizarSolicitacao').forEach(button => {
    button.addEventListener('click', () => {
        // Captura os dados do restaurante
        const solicitacao = button.closest('.solicitacao');
        const dadosRestaurante = {
            nome: solicitacao.querySelector('h4:nth-of-type(1) + p').innerText,
            hub: solicitacao.querySelector('h4:nth-of-type(2) + p').innerText,
            responsavel: solicitacao.querySelector('h4:nth-of-type(3) + p').innerText,
            contato: solicitacao.querySelector('h4:nth-of-type(4) + p').innerText,
            tipo: solicitacao.querySelector('h4:nth-of-type(5) + p').innerText
        };

        // Salva os dados no localStorage
        salvarRestauranteAutorizado(dadosRestaurante);

        // Remove a solicitação atual
        solicitacao.remove();
    });
});

document.querySelectorAll('.negarSolicitacao').forEach(button => {
    button.addEventListener('click', () => {
        // Remove a solicitação sem salvar
        const solicitacao = button.closest('.solicitacao');
        solicitacao.remove();
    });
});
