document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('storeForm');
    const scheduleList = document.getElementById('scheduleList');
    const addScheduleBtn = document.getElementById('addSchedule');
    const message = document.getElementById('message');

    // Adicionar horário
    addScheduleBtn.addEventListener('click', () => {
        const day = document.getElementById('day').value;
        const openTime = document.getElementById('openTime').value;
        const closeTime = document.getElementById('closeTime').value;

        if (day && openTime && closeTime) {
            const scheduleItem = document.createElement('div');
            scheduleItem.className = 'horario-item';
            scheduleItem.innerHTML = `
                ${day}: ${openTime} - ${closeTime}
                <button class="delete-btn">X</button>
            `;
            scheduleList.appendChild(scheduleItem);

            // Remover item
            scheduleItem.querySelector('.delete-btn').addEventListener('click', () => {
                scheduleItem.remove();
            });
        }
    });

    // Salvar formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fields = Array.from(form.querySelectorAll('input, select, textarea')).every(field => field.value);

        if (fields) {
            message.textContent = "Configurações salvas com sucesso!";
            message.style.display = 'block';
        } else {
            alert("Preencha todos os campos antes de salvar.");
        }
    });
});
