/* Precionando Enter na barra de pesquisa */
const input = document.getElementById('pesquisar');

function enterPesquisa(event) {
    if (event.key === 'Enter') {
        const valorURL = encodeURIComponent(input.value);
        window.location.href = `resultados/resultados.html?q=${valorURL}`;
    }
}

