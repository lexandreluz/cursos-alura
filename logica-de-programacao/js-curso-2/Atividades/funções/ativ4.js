function media(n1, n2, n3) {
    console.log(`A média das notas ${n1}, ${n2} e ${n3} é ${((n1 + n2 + n3) / 3).toFixed(2)}`);
}

media(Number(prompt("Digite a primeira nota: ")), Number(prompt("Digite a segunda nota: ")), Number(prompt("Digite a terceira nota: ")));