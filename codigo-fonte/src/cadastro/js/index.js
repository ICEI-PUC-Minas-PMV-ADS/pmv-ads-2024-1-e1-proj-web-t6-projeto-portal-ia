/* Adding variables used in HTML */
let namePerson = document.querySelector('#namePerson')
let labelName = document.querySelector('#labelName')
let validName = false

let userName = document.querySelector('#userName')
let labelUsername = document.querySelector('#labelUsername')
let validUsername = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let cellphoneNumber = document.querySelector('#cellphoneNumber')
let labelCellphone = document.querySelector('#labelCellphone')
let validCellphone = false

let passwordUser = document.querySelector('#passwordUser')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let passwordUserConfirm = document.querySelector('#passwordUserConfirm')
let labelPasswordConfirm = document.querySelector('#labelPasswordConfirm')
let validPasswordConfirm = false

let respostaSecreta = document.getElementById('respostaSecreta')
let labelRespostaSecreta = document.getElementById('labelRespostaSecreta')
let validRespostaSecreta = false

/* validing signup variables using functions */

namePerson.addEventListener('keyup', () => {
    if (namePerson.value.length <= 5) {
        labelName.setAttribute('style', 'color: #F84A4A')
        labelName.innerHTML = 'Insira no mínimo 6 caracteres'
    } else {
        labelName.setAttribute('style', 'color: #31EE66')
        labelName.innerHTML = 'Nome Completo'
        validName = true
    }
})

/* Necessary update when insert in a database */

userName.addEventListener('keyup', () => {
    if (userName.value.length <= 5) {
        labelUsername.setAttribute('style', 'color: #F84A4A')
        labelUsername.innerHTML = 'Insira no mínimo 6 caracteres'
    } else {
        labelUsername.setAttribute('style', 'color: #31EE66')
        labelUsername.innerHTML = 'Usuário'
        validUsername = true
    }
})

email.addEventListener('keyup', () => {
    const emailValue = email.value;
    if (!emailValue.includes('@')) {
        labelEmail.setAttribute('style', 'color: #F84A4A')
        labelEmail.innerHTML = 'E-mail inválido'
    } else {
        labelEmail.setAttribute('style', 'color: #31EE66')
        labelEmail.innerHTML = 'E-mail válido'
        validEmail = true
    }
})

/* Change parameter for numbers only (not a string) */
cellphoneNumber.addEventListener('keyup', () => {
    if (cellphoneNumber.value.length <= 8) {
        labelCellphone.setAttribute('style', 'color: #F84A4A')
        labelCellphone.innerHTML = 'Número não aceito'
    } else {
        labelCellphone.setAttribute('style', 'color: #31EE66')
        labelCellphone.innerHTML = 'Celular'
        validCellphone = true
    }
})


function validarSenha() {
    const specialCharacterPassword = /[!@#$%¨&*()_+-=?/<>:{}]/.test(passwordUser.value)
    if (!specialCharacterPassword) {
        labelPassword.setAttribute('style', 'color: #F84A4A')
        labelPassword.innerHTML = 'Você precisa de pelo menos um caracter especial (!,@,#)'
    } else {
        labelPassword.setAttribute('style', 'color: #31EE66')
        labelPassword.innerHTML = 'Senha'
        validPassword = true
    }
}

function confirmarSenha() {
    if (passwordUserConfirm.value !== passwordUser.value) {
        labelPasswordConfirm.setAttribute('style', 'color: #F84A4A')
        labelPasswordConfirm.innerHTML = 'As senhas não batem'
    } else {
        labelPasswordConfirm.setAttribute('style', 'color: #31EE66')
        labelPasswordConfirm.innerHTML = 'Confirmação da senha'
        validPasswordConfirm = true
    }
}

respostaSecreta.addEventListener('keyup', () => {
    if (respostaSecreta.value.length < 3) {
        labelRespostaSecreta.setAttribute('style', 'color: #F84A4A')
        labelRespostaSecreta.innerHTML = 'Insira no mínimo 3 caracteres'
    } else {
        labelRespostaSecreta.setAttribute('style', 'color: #31EE66')
        labelRespostaSecreta.innerHTML = 'Resposta'
        validRespostaSecreta = true
    }
})

/* Função pergunta secreta */
function habilitarCampoResposta() {
    const perguntaSecreta = document.getElementById('perguntaSecreta')
    if (!perguntaSecreta.value) {
        respostaSecreta.setAttribute('disabled', '');
        respostaSecreta.value = '';
    } else {
        respostaSecreta.removeAttribute('disabled');
    }
}

/* Function "Cadastro"*/
function register() {
    if (validName && validUsername && validEmail && validCellphone && validPassword && validPasswordConfirm && validRespostaSecreta) {
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

        listUser.push(
            {
                namePersonCad: namePerson.value,
                userNameCad: userName.value,
                emailCad: email.value,
                cellphoneNumberCad: cellphoneNumber.value,
                passwordUserCad: passwordUser.value,
                passwordUserConfirmCad: passwordUserConfirm.value,
                respostaSecreta: respostaSecreta.value,
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = '../login/login.html'
        }, 3000)

    } else {
        msgError.setAttribute('style', 'color: #F84A4A; display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }

}