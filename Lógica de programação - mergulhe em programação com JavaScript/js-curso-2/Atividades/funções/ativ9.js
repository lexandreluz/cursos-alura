function converterDolarParaReal(dolar) {
    const cotacao = 4.80;

    if (isNaN(dolar) || dolar < 0) {
        alert("Erro: Insira um valor válido em dólares.");
        return;
    }

    let reais = dolar * cotacao;
    alert(`US$${dolar.toFixed(2)} equivale a R$${reais.toFixed(2)}`);
}

// Solicita o valor ao usuário na chamada da função
converterDolarParaReal(parseFloat(prompt("Digite o valor em dólares: ")));
