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
        criterios ++; /* 1° critério */
        
        if (sobrenome != '') {
            criterios ++; /* 2° critério */
            
            if (validoEmail ==  true) {
                criterios ++; /* 3° critério */
                
                if (confirmarSenha == senha) {
                    criterios ++; /* 4° critério */
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
        div_mensagem.innerHTML = '<span class="realizado">Cadastro realizado com sucesso!'
    }

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
          cardErro.style.display = "block";
    
          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
    
          setTimeout(() => {
            window.location = "login.html";
          }, "2000");
    
          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });
    
    return false;
}

/* Login */
let emailFicticio = `pedro@gmail.com`;
let senhaFicticia = `Pedro123`;

function logar() {
    let email = input_email.value;
    let senha = input_senha.value;

    if (email == emailFicticio && senha == senhaFicticia) {
        window.location.href = "dashboard.html"
    } else {
        div_mensagem.innerHTML = `<span class="erro"> Email ou senha inválidos`;
    }
}