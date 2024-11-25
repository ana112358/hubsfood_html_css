// Selecionar os elementos
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const itemCount = document.getElementById('itemCount');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartCount = document.getElementById('cartCount');

// Inicializar contadores
let count = 0;       // Contador de itens na interface
let cartTotal = 0;   // Quantidade total no carrinho

// Função para adicionar itens
incrementBtn.addEventListener('click', () => {
    count++;
    itemCount.textContent = count;
});

// Função para remover itens
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        itemCount.textContent = count;
    }
});

// Função para adicionar ao carrinho
addToCartBtn.addEventListener('click', () => {
    cartTotal += count; // Adiciona a quantidade atual ao carrinho
    count = 0;          // Reseta o contador
    itemCount.textContent = count;
    cartCount.textContent = cartTotal; // Atualiza o carrinho
});
