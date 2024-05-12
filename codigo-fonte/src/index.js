document.addEventListener("DOMContentLoaded", function () {
    fetchContent();
});

function fetchContent() {
    fetch('./header/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao dar fetch no arquivo:', error);
        });
}