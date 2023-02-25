import entrada from 'readline-sync';
var n1 = 0;
var n2 = 1;
var vetNum = [n1, n2];
var n3;

var numeroUsuario = entrada.question("Digite um número, para verifica se ele faz parte da sequência de Fibonacci: ");
/*
console.log(n1);
console.log(n2);
*/
for(var i = 3; i < 15; i++) {
    n3 = n1 + n2;
    //console.log(n3);
    n1 = n2;
    n2 = n3;
    vetNum[i] = n3;
}

for (const num in vetNum) {
    if(numeroUsuario == vetNum[num]) {
        console.log("O número " +numeroUsuario+ " pertence a sequência");
    }
}