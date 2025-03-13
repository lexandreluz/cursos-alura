alert('Olá, bem vindo ao meu site!')
let nome = prompt('Qual é o seu nome?')
let idade = prompt('Qual é a sua idade?')
let numeroDeVendas = 50
let saldoFinal = 1000

let mensagemDeErro = 'Erro, preencha todos os campos obrigatórios'
alert(mensagemDeErro)

if (idade >= 18) {
  alert('Você é maior de idade, pode tirar a habilitação')
}