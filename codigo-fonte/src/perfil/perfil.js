document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario');
    const cancelButton = document.getElementById('cancelar-btn');
    const confirmButton = document.getElementById('confirmar-btn');
    const changePhotoButton = document.getElementById('change-photo-btn');
    const fileInput = document.getElementById('file-input');
    const avatar = document.getElementById('avatar');
    const nomeDisplay = document.getElementById('nome-display');
    const nomeInput = document.getElementById('nome');

    const fields = {
        nome: nomeInput,
        email: document.getElementById('email'),
        telefone: document.getElementById('telefone'),
        profissao: document.getElementById('profissao'),
        localizacao: document.getElementById('localizacao'),
        biografia: document.getElementById('biografia')
    };

    // Função para carregar a imagem do avatar do localStorage
    function loadAvatar() {
        const storedAvatar = localStorage.getItem('avatar');
        if (storedAvatar) {
            avatar.src = storedAvatar;
        }
    }

    // Função para salvar a imagem no localStorage
    function saveAvatar(imageData) {
        localStorage.setItem('avatar', imageData);
    }

    // Função para carregar os dados do formulário do localStorage
    function loadFormData() {
        Object.keys(fields).forEach(key => {
            const value = localStorage.getItem(key);
            if (value) {
                fields[key].value = value;
                if (key === 'nome') {
                    nomeDisplay.textContent = value;
                    nomeInput.value = value;
                    nomeInput.classList.add('hidden');
                }
            }
        });
    }

    // Função para salvar os dados do formulário no localStorage
    function saveFormData() {
        Object.keys(fields).forEach(key => {
            localStorage.setItem(key, fields[key].value);
        });
    }

    // Carregar dados e avatar ao iniciar a página
    loadAvatar();
    loadFormData();

    // Mostrar o campo de entrada do nome ao clicar no <h2>
    nomeDisplay.addEventListener('click', function() {
        nomeDisplay.classList.add('hidden');
        nomeInput.classList.remove('hidden');
        nomeInput.focus();
    });

    // Evento do botão alterar foto
    changePhotoButton.addEventListener('click', function(event) {
        event.preventDefault();
        fileInput.click();
    });

    // Evento de seleção de arquivo
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                avatar.src = imageData;
                saveAvatar(imageData);
            }
            reader.readAsDataURL(file);
        }
    });

    // Evento do botão confirmar
    confirmButton.addEventListener('click', function(event) {
        event.preventDefault();
        saveFormData();
        nomeDisplay.textContent = fields.nome.value;
        nomeDisplay.classList.remove('hidden');
        nomeInput.classList.add('hidden');
    });

    // Evento do botão cancelar
    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        Object.keys(fields).forEach(key => {
            fields[key].value = '';
        });
        avatar.src = '../assets/ilustrações/Avatar.svg';
        localStorage.clear();
        nomeDisplay.textContent = 'Fulano de tal da Silva';
        nomeInput.value = 'Fulano de tal da Silva';
        nomeDisplay.classList.remove('hidden');
        nomeInput.classList.add('hidden');
    });
});
