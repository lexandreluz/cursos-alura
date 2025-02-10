let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Tente adivinhar o número secreto, escolha um número entre 1 e 10:';

function verificarChute(){
    let chute = document.querySelector('input').value;
    let numeroSecreto = 7;
    if (chute < 1 || chute > 10) {
        alert('Por favor, escolha um número entre 1 e 10.');
    } else if (chute == numeroSecreto) {
        alert('Parabéns! Você acertou o número secreto.');
    } else {
        alert('Que pena! Você errou. Tente novamente.');
    }
}