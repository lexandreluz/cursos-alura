function calcularSalaCircular(raio) {
    const pi = 3.14;

    if (isNaN(raio) || raio <= 0) {
        console.log("Erro: Insira um valor válido para o raio.");
        return;
    }

    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;

    alert(`Área da sala: ${area.toFixed(2)} m²`);
    alert(`Perímetro da sala: ${perimetro.toFixed(2)} m`);
}

// Solicita o raio ao usuário na chamada da função
calcularSalaCircular(parseFloat(prompt("Digite o raio da sala (m): ")));
