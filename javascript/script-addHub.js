const hubNameInput = document.getElementById('hubName');
        const hubBairroInput = document.getElementById('hubBairro');
        const submitButton = document.getElementById('submitButton');
        const successMessage = document.getElementById('successMessage');
        const addImageButton = document.getElementById('addImageButton');

        // Função para habilitar/desabilitar o botão de cadastro
        function validateInputs() {
            submitButton.disabled = !(hubNameInput.value.trim() && hubBairroInput.value.trim());
        }

        hubNameInput.addEventListener('input', validateInputs);
        hubBairroInput.addEventListener('input', validateInputs);

        submitButton.addEventListener('click', () => {
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
                hubNameInput.value = '';
                hubBairroInput.value = '';
                validateInputs();
            }, 3000);
        });

        // Função para simular a ação do botão "Adicionar"
        addImageButton.addEventListener('click', () => {
            alert('Botão de adicionar clicado!');
        });