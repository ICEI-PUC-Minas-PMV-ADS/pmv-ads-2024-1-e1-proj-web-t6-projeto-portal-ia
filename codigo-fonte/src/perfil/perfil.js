document.addEventListener('DOMContentLoaded', function () {
    const usuarios = JSON.parse(localStorage.getItem('listUser'));
    let usuarioLogado = localStorage.getItem('usuarioLogado');

    if (!usuarios) {
        alert("Não tem usuários cadastrados!");
        window.location.href = '../cadastro/index.html';
    }

    const indexUsuario = buscaUsuarioDaListaDeUsuarios();

    /* 
     * Busca usuários da lista de usuários (listUser) do localStorage.
     * Será comparado o e-mail do usuário logado que está no localStorage quando é feito o login.
     * 
     */
    function buscaUsuarioDaListaDeUsuarios() {
        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];

            if (usuarioLogado == usuario.emailCad) {
                return i;
            } else {
                return -1;
            }
        }
    }

    if (!usuarioLogado || indexUsuario < 0) {
        alert("Usuário não está logado, favor realizar novo login!");
        window.location.href = '../login/login.html';
    }

    const form = document.getElementById('formulario-perfil');
    const cancelButton = document.getElementById('cancelar-btn');
    const confirmButton = document.getElementById('confirmar-btn');
    const changePhotoButton = document.getElementById('change-photo-btn');
    const fileInput = document.getElementById('file-input');
    const avatar = document.getElementById('avatar');
    const nomeUsuario = document.getElementById('nomeUsuario');


    const fields = {
        campoNome: document.getElementById('campoNome'),
        campoEmail: document.getElementById('campoEmail'),
        campoTelefone: document.getElementById('campoTelefone'),
        campoProfissao: document.getElementById('campoProfissao'),
        campoCidade: document.getElementById('campoCidade'),
        campoBiografia: document.getElementById('campoBiografia')
    };

    // Função para carregar a imagem do avatar do localStorage
    function loadAvatar() {
        const storedAvatar = usuarios[indexUsuario].avatar
        if (storedAvatar) {
            avatar.src = storedAvatar;
        }
    }

    // Função para salvar a imagem no localStorage
    function saveAvatar(imageData) {
        usuarios[indexUsuario].avatar = imageData;
        localStorage.setItem('listUser', JSON.stringify(usuarios));
    }

    // Função para carregar os dados do formulário do localStorage
    function loadFormData() {
        if (!usuarios[indexUsuario]) {
            return;
        }

        // Inicializa os campos do formulário com o valor do usuário logado encontrado no localStorage
        fields.campoNome.value = usuarios[indexUsuario].namePersonCad;
        fields.campoEmail.value = usuarios[indexUsuario].emailCad;
        fields.campoTelefone.value = usuarios[indexUsuario].cellphoneNumberCad;
        fields.campoProfissao.value = usuarios[indexUsuario].profissao;
        fields.campoCidade.value = usuarios[indexUsuario].cidade;
        fields.campoBiografia.value = usuarios[indexUsuario].biografia;

        // Inicializa o h2 que mostra o nome do usuário
        nomeUsuario.innerHTML = usuarios[indexUsuario].namePersonCad;
    }

    // Carregar dados e avatar ao iniciar a página
    loadAvatar();
    loadFormData();

    // Mostrar o campo de entrada do nome ao clicar no <h2>
    nomeUsuario.addEventListener('click', function () {
        nomeUsuario.classList.add('hidden');
        nomeUsuario.classList.remove('hidden');
        nomeUsuario.focus();
    });

    // Evento do botão alterar foto
    changePhotoButton.addEventListener('click', function (event) {
        event.preventDefault();
        fileInput.click();
    });

    // Evento de seleção de arquivo
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageData = e.target.result;
                avatar.src = imageData;
                saveAvatar(imageData);
            }
            reader.readAsDataURL(file);
        }
    });

    // Evento do botão confirmar
    confirmButton.addEventListener('click', function (event) {
        event.preventDefault();
        nomeUsuario.innerHTML = fields.campoNome.value;

        if (indexUsuario < 0) {
            alert('E-mail não encontrado');
        } else {
            usuarios[indexUsuario].emailCad = campoEmail.value;
            usuarios[indexUsuario].cellphoneNumberCad = campoTelefone.value;
            usuarios[indexUsuario].biografia = campoBiografia.value;
            usuarios[indexUsuario].cidade = campoCidade.value;
            usuarios[indexUsuario].profissao = campoProfissao.value;
            usuarios[indexUsuario].namePersonCad = campoNome.value;

            usuarioLogado = campoEmail.value;

            localStorage.setItem('usuarioLogado', usuarioLogado);
            localStorage.setItem('listUser', JSON.stringify(usuarios));

            window.location.href = '../index.html';
        }
    });

    // Evento do botão cancelar
    cancelButton.addEventListener('click', function (event) {
        event.preventDefault();
        Object.keys(fields).forEach(key => {
            fields[key].value = '';
        });

        form.reset();

        avatar.src = '../assets/ilustrações/Avatar.svg';
        nomeUsuario.textContent = 'Fulano de tal da Silva';
        nomeUsuario.classList.remove('hidden');
        nomeUsuario.classList.add('hidden');

        // Mostra os campos novamente
        fields.campoEmail.classList.remove('hidden');
        fields.campoTelefone.classList.remove('hidden');
        fields.campoProfissao.classList.remove('hidden');
        fields.campoCidade.classList.remove('hidden');
        fields.campoBiografia.classList.remove('hidden');
    });

    // Eventos de entrada para validação dos campos
    fields.campoTelefone.addEventListener('input', validatecampoTelefone);
    fields.campoEmail.addEventListener('input', validatecampoEmail);
    fields.campoBiografia.addEventListener('input', validatecampoBiografia);


    // Função para validar o campoTelefone
    function validatecampoTelefone() {
        let campoTelefone = fields.campoTelefone.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (campoTelefone.length > 2) {
            campoTelefone = `(${campoTelefone.substring(0, 2)}) ${campoTelefone.substring(2)}`;
        }
        fields.campoTelefone.value = campoTelefone;

        if (campoTelefone.replace(/\D/g, '').length < 11) {
            fields.campoTelefone.style.color = 'red';
        } else {
            fields.campoTelefone.style.color = '';
        }
    }

    // Função para validar o campoemail
    function validatecampoEmail() {
        const campoEmail = fields.campoEmail.value;
        if (!campoEmail.includes('@')) {
            fields.campoEmail.style.color = 'red';
        } else {
            fields.campoEmail.style.color = '';
        }
    }

    // Função para validar a campoBiografia
    function validatecampoBiografia() {
        const campoBiografia = fields.campoBiografia.value;
        if (campoBiografia.length < 20) {
            fields.campoBiografia.style.color = 'red';
        } else {
            fields.campoBiografia.style.color = '';
        }
    }
});