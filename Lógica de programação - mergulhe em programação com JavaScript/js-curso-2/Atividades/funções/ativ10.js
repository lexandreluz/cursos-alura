function calcularSala(altura, largura) {
    if (isNaN(altura) || isNaN(largura) || altura <= 0 || largura <= 0) {
        console.log("Erro: Insira valores válidos para altura e largura.");
        return;
    }

    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    alert(`Área da sala: ${area.toFixed(2)} m²`);
    alert(`Perímetro da sala: ${perimetro.toFixed(2)} m`);
}

// Solicita altura e largura ao usuário na chamada da função
calcularSala(parseFloat(prompt("Digite a altura da sala (m): ")), parseFloat(prompt("Digite a largura da sala (m): ")));
