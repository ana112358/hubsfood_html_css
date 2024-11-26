// Função para carregar restaurantes do Local Storage
function carregarRestaurantesAutorizados() {
    const restaurantesAutorizados = JSON.parse(localStorage.getItem("restaurantesAutorizados")) || [];
    const conteudoRestaurantes = document.querySelector(".conteudoRestaurantesAutorizados");

    restaurantesAutorizados.forEach((restaurante, index) => {
        const restauranteHTML = `
            <div class="solicitacao" data-index="${index}">
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
                    <img width="80px" src="../../imagens/pinDeletar.png" alt="Deletar">
                </div>
            </div>
        `;

        conteudoRestaurantes.insertAdjacentHTML("beforeend", restauranteHTML);
    });
}

// Função para deletar restaurante do DOM e Local Storage
function deletarRestaurante(event) {
    const botao = event.target.closest(".botaoDeletar");
    if (!botao) return; // Garante que o clique seja no botão

    const parentDiv = botao.closest(".solicitacao");
    const index = parentDiv.getAttribute("data-index"); // Recupera o índice

    // Remove do Local Storage
    let restaurantesAutorizados = JSON.parse(localStorage.getItem("restaurantesAutorizados")) || [];
    restaurantesAutorizados.splice(index, 1);
    localStorage.setItem("restaurantesAutorizados", JSON.stringify(restaurantesAutorizados));

    // Remove do DOM
    parentDiv.remove();
}

// Evento para carregar a página e adicionar os eventos de exclusão
document.addEventListener("DOMContentLoaded", () => {
    carregarRestaurantesAutorizados();

    // Adiciona o evento de clique para os botões de deletar
    const conteudoRestaurantes = document.querySelector(".conteudoRestaurantesAutorizados");
    conteudoRestaurantes.addEventListener("click", deletarRestaurante);
});
