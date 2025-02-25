function exibirTabuada(numero) {
    if (isNaN(numero) || numero <= 0) {
        alert("Erro: Insira um número válido maior que zero.");
        return;
    }

    let tabuada = `Tabuada do ${numero}:\n`;
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }

    alert(tabuada);
}

// Solicita o número ao usuário na chamada da função
exibirTabuada(parseInt(prompt("Digite um número para ver a tabuada: ")));
