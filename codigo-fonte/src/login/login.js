document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const login = document.getElementById('Login').value;
        const senha = document.getElementById('senha').value;

        // Aqui você faria uma chamada a uma API de login com os dados do formulário
        efetuarLogin(login, senha);
    });

    const googleButton = document.getElementById('googleButton');
    const facebookButton = document.getElementById('facebookButton');

    if (googleButton) {
        googleButton.addEventListener('click', () => {
            alert('Conecte sua conta da plataforma Google');
        });
    }

    if (facebookButton) {
        facebookButton.addEventListener('click', () => {
            alert('Conecte sua conta da plataforma Facebook');
        });
    }
});

<<<<<<< HEAD
function efetuarLogin(login, senha) {
    // Simulação de uma chamada a uma API de autenticação
    fetch('https://sua-api-de-autenticacao.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: login, senha: senha })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Se o login for bem-sucedido, redirecione o usuário
            window.location.href = 'dashboard.html';
        } else {
            // Se o login falhar, exiba uma mensagem de erro
            alert('Login ou senha inválidos. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro. Tente novamente mais tarde.');
    });
=======
    const indexUsuario = usuarios.findIndex(usuario => (campoLogin.value == usuario.emailCad || campoLogin.value == usuario.cellphoneNumberCad) && campoPalavraSecreta.value == usuario.respostaSecreta);

    return indexUsuario;
}


function lerUsuariosDoLocalStorage() {
    return JSON.parse(localStorage.getItem('listUser'));
>>>>>>> 94a63e6ea52b31414275e9678b8416dcdc83a157
}

function limparCampos() {
    // Função para limpar campos do modal de esqueci a senha
}

function validarPerguntaSecreta() {
    // Função para validar a pergunta secreta
}

function validarNovaSenha() {
    // Função para validar a nova senha
}

function confirmarSenha() {
    // Função para confirmar a nova senha
}

function definirNovaSenha() {
    // Função para definir a nova senha
}

<<<<<<< HEAD
function toggleIconeMostrarSenha(inputId) {
    const input = document.getElementById(inputId);
    const icon = document.querySelector(`#${inputId} + i`);

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('ri-eye-off-fill');
        icon.classList.add('ri-eye-fill');
    } else {
        input.type = 'password';
        icon.classList.remove('ri-eye-fill');
        icon.classList.add('ri-eye-off-fill');
    }
}
=======
const login = document.getElementById('login');
const senha = document.getElementById('senha');

/* validar usuário e senha*/
function validarUsuarioSenha() {
    if (!login.value || !senha.value) {
        alert("Usuário ou senha inválido");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('listUser'));

    const indexUsuario = usuarios.findIndex(usuario => ((login.value == usuario.emailCad || login.value == usuario.cellphoneNumberCad) && senha.value == usuario.passwordUserCad));

    if (indexUsuario < 0) {
        alert("Usuário ou senha inválido");
    } else {
        localStorage.setItem('usuarioLogado', usuarios[indexUsuario].emailCad);
        window.location.href = '../index.html';
    }
}
>>>>>>> 94a63e6ea52b31414275e9678b8416dcdc83a157
