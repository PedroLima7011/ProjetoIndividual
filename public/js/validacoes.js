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
        if (email.endsWith(finalEmail[i])) {
            validoEmail = true;
        }
    }

    if (nome != '') {
        criterios++; /* 1° critério */

        if (sobrenome != '') {
            criterios++; /* 2° critério */

            if (validoEmail == true) {
                criterios++; /* 3° critério */

                if (confirmarSenha == senha) {
                    criterios++; /* 4° critério */
                } else {
                    div_mensagem.innerHTML = `<span class="erro"> As senhas não coincidem`;
                }

            } else {
                div_mensagem.innerHTML = `<span class="erro"> Insira um email válido`;
            }

        } else {
            div_mensagem.innerHTML = `<span class="erro"> Insira seu sobrenome`;
        }

    } else {
        div_mensagem.innerHTML = `<span class="erro"> Insira seu nome`;
    }

    if (criterios == 4) {
        
        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                sobrenomeServer: sobrenome,
                emailServer: email,
                senhaServer: senha
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);
    
                if (resposta.ok) {
    
                    div_mensagem.innerHTML =
                        `<span class="realizado"> Cadastro realizado com sucesso!...`;
    
                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000");
    
                    limparFormulario();
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    
        return false;
    }

}

/* Login */
function logar() {
    let email = input_email.value;
    let senha = input_senha.value;

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.SOBRENOME_USUARIO = json.sobrenome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "quiz.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            div_mensagem.innerHTML = `<span class="erro"> Email e/ou senha inválido(s)`;

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;

}