/* Cadastro */
function cadastrar() {
    let nome = input_nome.value;
    let sobrenome = input_sobrenome.value;
    let email = input_email.value;
    let senha = input_senha.value;
    let confirmarSenha = input_confirmarSenha.value;

    let finalEmail = ['@sptech.school', '@gmail.com', '@hotmail.com', '@yahoo.com', '@outlook.com']
    let validoEmail = false;
    let criterios = 0;

    for (let i = 0; i < finalEmail.length; i++) {
        if (email.endsWith(validaEmail[i])) {
            validoEmail = true;
        }
    }

    if (nome != '') {
        criterios ++; /* 1° critério */
    } else {
        div_mensagem.innerHTML = `Insira seu nome`;
    }

    if (sobrenome != '') {
        criterios ++; /* 2° critério */
    } else {
        div_mensagem.innerHTML = `Insira seu sobrenome`;
    }

    if (validoEmail = true || email.includes('@') && email.endsWith('.com')) {
        criterios ++; /* 3° critério */
    } else {
        div_mensagem.innerHTML = `Insira um email válido`;
    }

    if (confirmarSenha == senha) {
        criterios ++; /* 4° critério */
    } else {
        div_mensagem.innerHTML = `As senhas não coincidem`;
    }

    if (criterios == 4) {
        alert('Cadastro realizado com sucesso!')
    }
}

/* Login */
let emailFicticio = `pedro@gmail.com`;
let senhaFicticia = `Pedro123`;

function logar() {
    let email = input_email.value;
    let senha = input_senha.value;

    if (email == emailFicticio && senha == senhaFicticia) {
        alert('Login realizado com sucesso!')
    } else {
        div_mensagem.innerHTML = `Email ou senha inválidos`;
    }
}