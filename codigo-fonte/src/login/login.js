function mostrarAlerta(event) {
    event.preventDefault();

    var login = document.getElementById("Login").value;
    var senha = document.getElementById("senha").value;

    alert("Login: " + login + "; Senha: " + senha);
}

function clickGoogle() {
    alert("Conecte o Google")
}

function clickFacebook() {
    alert("Conecte o facebook")
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))