/* Precionando Enter na barra de pesquisa */
const input = document.getElementById('pesquisar');

function enterPesquisa(event) {
    if (event.key === 'Enter') {
        const valorURL = encodeURIComponent(input.value);
        window.location.href = `resultados/resultados.html?q=${valorURL}`;
    }
}

const usuarios = JSON.parse(localStorage.getItem('listUser'));

const usuarioLogado = localStorage.getItem('usuarioLogado');

const indexUsuario = buscaUsuarioDaListaDeUsuarios();

/* 
 * Busca usuários da lista de usuários (listUser) do localStorage.
 * Será comparado o e-mail do usuário logado que está no localStorage quando é feito o login.
 * 
 */
function buscaUsuarioDaListaDeUsuarios() {
    if (!usuarios || !usuarioLogado) {
        return;
    }

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];

        if (usuarioLogado == usuario.emailCad) {
            return i;
        }

        if (i == usuarios.length - 1) {
            return -1;
        }
    }
}

const btnLogin = document.getElementById('btnLogin');
const btnPerfil = document.getElementById('btnPerfil');

if (indexUsuario >= 0) {
    btnLogin.style.display = "none";
    btnPerfil.style.display = "initial";
} else {
    btnLogin.style.display = "initial";
    btnPerfil.style.display = "none";
}
