function mostrarAlerta(event) {
    event.preventDefault();

    var login = document.getElementById("Login").value;
    var senha = document.getElementById("senha").value;

    alert("Login: " + login + "; Senha: " + senha);
}

function clickGoogle() {
    alert("Conecte o Login")
}

function clickFacebook() {
    alert("Conecte o facebook")
}