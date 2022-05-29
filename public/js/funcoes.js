// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var pontuacao = sessionStorage.PONTUACAO_USUARIO;

    var nomeUsuario = document.getElementById("b_usuario");
    var pontosQuiz = document.getElementById("b_pontuacao");

    if (email != null && nome != null && pontosQuiz != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (nomeUsuario != undefined) {
            b_usuario.innerHTML = nome;
        }
        if (pontosQuiz != undefined) {
            b_pontuacao.innerHTML = pontuacao;
        }

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)

function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    var divCampos = document.getElementById("div_campos");
    divCampos.style.display = "none";
    divAguardar.style.display = "block";
    divAguardar.style.display = "flex";
}



function finalizarAguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    var divCampos = document.getElementById("div_campos");
    divAguardar.style.display = "none";
    divCampos.style.display = "block";

    /*
    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
    */
}



// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

