// Função para carregar restaurantes do localStorage
function carregarRestaurantesAutorizados() {
    const restaurantesAutorizados = JSON.parse(localStorage.getItem('restaurantesAutorizados')) || [];

    const conteudoRestaurantes = document.querySelector('.conteudoRestaurantesAutorizados');
    restaurantesAutorizados.forEach(restaurante => {
        const restauranteHTML = `
            <div class="solicitacao">
                <h4>Nome Restaurante</h4>
                <p>${restaurante.nome}</p>

                <h4>Hub de Referência</h4>
                <p>${restaurante.hub}</p>

                <h4>Nome do Responsável</h4>
                <p>${restaurante.responsavel}</p>

                <h4>Contato do Responsável</h4>
                <p>${restaurante.contato}</p>

                <h4>Tipo de Estabelecimento</h4>
                <p>${restaurante.tipo}</p>

                <div class="botaoDeletar">
                    <img width="80px" src="../../imagens/pinDeletar.png" alt="">
                </div>
            </div>
        `;

        // Adiciona ao contêiner
        conteudoRestaurantes.insertAdjacentHTML('beforeend', restauranteHTML);
    });
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarRestaurantesAutorizados);

document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".botaoDeletar");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const parentDiv = button.closest(".solicitacao"); // Encontra o contêiner pai
            if (parentDiv) {
                parentDiv.remove(); // Remove o elemento pai
            }
        });
    });
});
