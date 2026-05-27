// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;

    if (email == null) {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

function sessao() {
     var email = sessionStorage.EMAIL_USUARIO;

    if (email != null) {
        document.getElementById('logar').style.display = "none"
        document.getElementById('cadastrar').style.display = "none"
    }
}