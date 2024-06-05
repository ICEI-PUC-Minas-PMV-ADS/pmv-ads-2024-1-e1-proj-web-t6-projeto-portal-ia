const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/* modal - esqueci a senha */

const modalEsqueciSenha = new bootstrap.Modal(document.getElementById('modalEsqueciSenha'));
const modalRecuperarSenha = new bootstrap.Modal(document.getElementById('modalRecuperarSenha'));

const validarCampo = document.getElementById('modalEsqueciSenha');

const campoLogin = document.getElementById('campoLogin');
const campoPalavraSecreta = document.getElementById('campoPalavraSecreta');

const novaSenha = document.getElementById('novaSenha');
const confirmarNovaSenha = document.getElementById('confirmarNovaSenha');

const msgErro = document.getElementById('msgErro');
const msgErroConfirmacao = document.getElementById('msgErroConfirmacao');

const iconeConfirmarNovaSenha = document.getElementById('iconeConfirmarNovaSenha');
const iconeNovaSenha = document.getElementById('iconeNovaSenha');

function validarPerguntaSecreta() {

    const indexUsuario = encontrarIndexUsuario();

    /*  */
    if (indexUsuario >= 0) {

        modalEsqueciSenha.hide();
        modalRecuperarSenha.show();
        novaSenha.value = "";
        confirmarNovaSenha.value = "";
        msgErro.style.visibility = "hidden";
        msgErroConfirmacao.style.visibility = "hidden";
        iconeConfirmarNovaSenha.classList.add("ri-eye-off-fill");
        iconeNovaSenha.classList.add("ri-eye-off-fill");
    } else {

        alert('Usuário não encontrado. Tente novamente');

    }
}

function encontrarIndexUsuario() {
    const usuarios = lerUsuariosDoLocalStorage();

    const indexUsuario = usuarios.findIndex(usuario => (campoLogin.value == usuario.emailCad || campoLogin.value == usuario.cellphoneNumberCad) && campoPalavraSecreta.value == usuario.respostaSecreta);

    return indexUsuario;
}

function lerUsuariosDoLocalStorage() {
    return JSON.parse(localStorage.getItem('listUser'));
}

function limparCampos() {
    campoLogin.value = "";
    campoPalavraSecreta.value = "";
}

function validarNovaSenha() {

    const temCaractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(novaSenha.value);

    if (temCaractereEspecial || !novaSenha.value) {
        msgErro.style.visibility = "hidden";
        novaSenha.classList.remove('input-ontline');
    } else {
        msgErro.setAttribute('style', 'color: #F84A4A');
        msgErro.style.visibility = "visible";
        novaSenha.classList.add('input-ontline');
    }
}

function confirmarSenha() {
    if (novaSenha.value !== confirmarNovaSenha.value) {
        msgErroConfirmacao.setAttribute('style', 'color: #F84A4A');
        msgErroConfirmacao.style.visibility = "visible";
        confirmarNovaSenha.classList.add('input-ontline');
    } else {
        msgErroConfirmacao.style.visibility = "hidden";
        confirmarNovaSenha.classList.remove('input-ontline');
    }
}

function toggleIconeMostrarSenha(campoToggleSenha) {
    const campo = campoToggleSenha === "novaSenha" ? novaSenha : confirmarNovaSenha;
    const iconeSenha = campoToggleSenha === "novaSenha" ? iconeNovaSenha : iconeConfirmarNovaSenha;

    if (campo.type === "password") {
        campo.type = "text";
        iconeSenha.classList.remove("ri-eye-off-fill");
        iconeSenha.classList.add("ri-eye-fill");
    } else {
        campo.type = "password";
        iconeSenha.classList.remove("ri-eye-fill");
        iconeSenha.classList.add("ri-eye-off-fill");
    }
}

function definirNovaSenha() {
    const usuarios = lerUsuariosDoLocalStorage();

    const indexUsuario = encontrarIndexUsuario();

    if (indexUsuario === -1) {
        return;
    }

    if (novaSenha.value === confirmarNovaSenha.value && novaSenha.value !== "" && confirmarNovaSenha.value !== "") {

        usuarios[indexUsuario].passwordUserCad = novaSenha.value;
        usuarios[indexUsuario].passwordUserConfirmCad = confirmarNovaSenha.value;

        localStorage.setItem('listUser', JSON.stringify(usuarios));

        alert('Senha alterada com sucesso!');
        modalRecuperarSenha.hide();

    } else {

        alert('Senha inválida. Tente novamente.');
    }
}

