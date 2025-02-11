document.querySelector('h1').textContent = 'Hora do Desafio';

function verificarConsole() {
    console.log('O botão foi clicado');
}

function verificarAlert() {
    alert('Eu amo JS');
}

function verificarPrompt() {
    const cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function verificarSoma() {
    const numero1 = parseInt(prompt('Digite o primeiro número inteiro:'));
    const numero2 = parseInt(prompt('Digite o segundo número inteiro:'));
    const soma = numero1 + numero2;
    alert(`O resultado da soma é: ${soma}`);
}

document.querySelector('#botaoConsole').addEventListener('click', verificarConsole());
document.querySelector('#botaoAlerta').addEventListener('click', verificarAlert());
document.querySelector('#botaoPrompt').addEventListener('click', verificarPrompt());
document.querySelector('#botaoSoma').addEventListener('click', verificarSoma());