var defaultThreads = [
    {
        id: 1,
        title: "O que é Inteligência Artificial e como ela funciona?",
        author: "Cássia de Arruda",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Tiago",
                date: Date.now(),
                content: "A inteligência artificial é um campo de estudo multidisciplinar que abrange varias áreas do conhecimento. É também um conjunto de novas tecnologias que permitem aos aparelhos smart executarem várias funções avançadas de modo quase autônomo, representanto um marco histórico na computação moderna."
            },
        ]
    },
    {
        id: 2,
        title: "Quais são os impactos éticos e sociais da IA?",
        author: "Tiago Marques",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Tiago",
                date: Date.now(),
                content: "A questão central é como a sociedade lida com esses problemas éticos. Primeiramente, a conscientização sobre o viés e a discriminação em algoritmos de IA está aumentando. Muitos casos de discriminação algorítmica têm ganhado destaque na mídia, destacando a necessidade de ação."
            },
        ]
    },
    {
        id: 3,
        title: "Quais habilidades e conhecimentos são necessários para começar a trabalhar com IA?",
        author: "Hiago",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Matheus",
                date: Date.now(),
                content: "Diversos conhecimentos sobre programação"
            },
        ]
    },
    {
        id: 4,
        title: "Quais são as principais diferenças entre IA, machine learning e deep learning?",
        author: "Winie",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Fernanda",
                date: Date.now(),
                content: "Cada um se alicerça em objetivos diferentes"
            },
        ]
    },
    {
        id: 5,
        title: "Quais são as aplicações práticas da IA no mundo real?",
        author: "William",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Henrique",
                date: Date.now(),
                content: "Variam de acordo com a necessidade do usuário."
            },
        ]
    },
    {
        id: 6,
        title: "Quais são as aplicações práticas da IA no mundo real?",
        author: "Fulano1",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Fulano1",
                date: Date.now(),
                content: "Comentario1"
            },
        ]
    },
    {
        id: 7,
        title: "Quais são os principais desafios no desenvolvimento de Inteligência Artificial atualmente?",
        author: "Fulano2",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Fulano2",
                date: Date.now(),
                content: "Comentario2"
            },
        ]
    },
    {
        id: 8,
        title: "Como a Inteligência Artificial pode transformar a indústria da saúde?",
        author: "Fulano3",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Fulano3",
                date: Date.now(),
                content: "Comentario3"
            },
        ]
    },
    {
        id: 9,
        title: "Quais são as tendências emergentes na pesquisa e desenvolvimento de IA?",
        author: "Fulano4",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Fulano4",
                date: Date.now(),
                content: "Comentario4"
            },
        ]
    },
    {
        id: 10,
        title: "Como a Inteligência Artificial está sendo utilizada na automação de processos industriais?",
        author: "Fulano5",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Fulano5",
                date: Date.now(),
                content: "Comentario5"
            },
        ]
    },
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

document.getElementById('comment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var author = document.getElementById('comment-author').value;
    var content = document.getElementById('comment-content').value;

    var threadId = 1;

    var thread = threads.find(t => t.id === threadId);
    if (thread) {
        thread.comments.push({
            author: author,
            date: Date.now(),
            content: content
        });

        localStorage.setItem('threads', JSON.stringify(threads));

        displayComments(thread);
    }

    document.getElementById('comment-form').reset();
});

function displayComments(thread) {
    var container = document.querySelector('ol');
    container.innerHTML = '';
    for (let comment of thread.comments) {
        var html = `
        <li class="row">
            <h4 class="title">
                ${comment.author}
            </h4>
            <div class="bottom">
                <p class="timestamp">
                    ${new Date(comment.date).toLocaleString()}
                </p>
                <p class="comment-content">
                    ${comment.content}
                </p>
            </div>
        </li>
        `;
        container.insertAdjacentHTML('beforeend', html);
    }
}

var currentThread = threads.find(t => t.id === 1);
if (currentThread) {
    displayComments(currentThread);
}
