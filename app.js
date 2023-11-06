let numeroAleatorio = sorteiaNumero();
let tentativas = 1
inicioDoJogo();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function inicioDoJogo(){
exibirTextoNaTela('h1', 'Jogo do Adivinhão!');
exibirTextoNaTela('p', 'Escolha seu número entre 1 e 10');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavratentativa = tentativas > 1 ? `com ${tentativas} tentativas` : 'de primeira!'
    let mensagemTentativas = `Você acetou ${palavratentativa}`
    if(chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'Acertou, Adivinhão!');
        exibirTextoNaTela('p', mensagemTentativas);
    }else if (chute > numeroAleatorio){
        exibirTextoNaTela('h1', 'Seu palpite foi maior');
    }else{
        exibirTextoNaTela('h1', 'Seu palpite foi menor');
    }
    tentativas++
    limparCampo();
    document.getElementById('reiniciar').removeAttribute('disabled');
}


function sorteiaNumero() {
    return parseInt(Math.random() * 10 + 1)
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroAleatorio = sorteiaNumero();
    limparCampo();
    tentativas = 1;
    inicioDoJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


