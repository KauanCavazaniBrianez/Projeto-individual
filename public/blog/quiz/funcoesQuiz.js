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

function start() {
    var respostaCorreta = 0;
    var divBotao = document.getElementById("btn");
    var divPerguntas = document.getElementById("divPerguntas");
    divBotao.style.display = "none";
    divPerguntas.style.display = "block";
    pergunta();
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

