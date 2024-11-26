const NameInput = document.getElementById('itemName');
        const descricaoInput = document.getElementById('descricao');
        const valorInput = document.getElementById('valor');
        const submitButton = document.getElementById('submitButton1');
        const successMessage = document.getElementById('successMessage1');
        const addImageButton = document.getElementById('addImageButton1');

        // Função para habilitar/desabilitar o botão de cadastro
        function validateInputs() {
            submitButton.disabled = !(NameInput.value.trim() && descricaoInput.value.trim() && valorInput.value.trim() );
        }

        NameInput.addEventListener('input', validateInputs);
        descricaoInput.addEventListener('input', validateInputs);
        valorInput.addEventListener('input', validateInputs);

        submitButton.addEventListener('click', () => {
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
                NameInput.value = '';
                descricaoInput.value = '';
                valorInput.value = '';
                validateInputs();
            }, 3000);
        });

        // Função para simular a ação do botão "Adicionar"
        addImageButton.addEventListener('click', () => {
            alert('Botão de adicionar clicado!');
        });