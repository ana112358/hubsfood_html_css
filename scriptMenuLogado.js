document.querySelector('.menu-trigger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const trigger = document.querySelector('.menu-trigger');
    
    if (!menu.contains(event.target) && !trigger.contains(event.target)) {
        menu.style.display = 'none';
    }
});
