document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);

    const params = {};

    urlParams.forEach((value, key) => {
        console.log(value, key);
        params[key] = value;
    });

    const inputPesquisa = document.getElementById('searchbar');
    inputPesquisa.value = decodeURIComponent(params.q);
});