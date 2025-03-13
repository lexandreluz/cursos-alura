function fatorial(n) {
    if (isNaN(n) || n < 0) {
        console.log("Erro: Insira um número inteiro positivo!");
        return;
    }

    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }

    alert(`O fatorial de ${n} é ${resultado}`);
}

fatorial(parseInt(prompt("Digite um número para calcular o fatorial: ")));