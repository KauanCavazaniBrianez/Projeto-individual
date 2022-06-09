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

var apito = new Audio("../css/audio/apitodefutebol.mp3");
var torcida = new Audio("../css/audio/torcida_efeito_sonoro_toquesengracadosmp3.com.mp3");

function start() {
    var divBotao = document.getElementById("btn");
    var divPerguntas = document.getElementById("divPerguntas");
    divBotao.style.display = "none";
    divPerguntas.style.display = "block";
    var start = true;
    apito.play();
    check(start);
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

