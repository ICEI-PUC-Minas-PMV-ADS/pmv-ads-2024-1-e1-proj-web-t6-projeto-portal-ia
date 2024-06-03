const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/* Esqueci a senha */

const validarCampo = document.getElementById('modalEsqueciSenha');
const campoEmail = document.getElementById('campoEmail');
const campoPalavraSecreta = document.getElementById('campoPalavraSecreta');

function filtrar() {
    const usuarios = JSON.parse(localStorage.getItem('listUser'));

    for (let cont = 0; cont < usuarios.length; cont++) {
        const usuario = usuarios[cont];

        if (campoEmail.value == usuario.emailCad && campoPalavraSecreta.value == usuario.respostaSecreta) {

        }
    }
}