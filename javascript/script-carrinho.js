document.querySelectorAll('.component').forEach(component => {
    component.addEventListener('click', (event) => {
        const target = event.target;
        const row = target.closest('tr');
        
        if (target.classList.contains('increment')) {
            const count = row.querySelector('.count');
            const price = parseFloat(row.querySelector('.price').textContent.replace('R$', '').replace(',', '.'));
            count.textContent = parseInt(count.textContent) + 1;
            row.querySelector('.total').textContent = `R$${(price * parseInt(count.textContent)).toFixed(2).replace('.', ',')}`;
        }
        
        if (target.classList.contains('decrement')) {
            const count = row.querySelector('.count');
            const price = parseFloat(row.querySelector('.price').textContent.replace('R$', '').replace(',', '.'));
            if (parseInt(count.textContent) > 1) {
                count.textContent = parseInt(count.textContent) - 1;
                row.querySelector('.total').textContent = `R$${(price * parseInt(count.textContent)).toFixed(2).replace('.', ',')}`;
            }
        }
        
        if (target.classList.contains('remove-btn')) {
            row.remove();
        }
    });
});
