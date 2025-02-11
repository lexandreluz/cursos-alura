function maiorNumero(n1, n2){
    if(n1 > n2){
        console.log(`Entre ${n1} e ${n2}, o maior número é ${n1}`);
    }else{
        console.log(`Entre ${n1} e ${n2}, o maior número é ${n2}`);
    }
}

maiorNumero(prompt("Digite o primeiro número: "), prompt("Digite o segundo número: "));