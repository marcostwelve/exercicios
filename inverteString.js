import entradaDados from 'readline-sync';

var caracter = [];
var caracterInvertido = [];
var tamanhoPalavra = entradaDados.question("Quantas letras tem a sua palavra: ");
var contador = Number(tamanhoPalavra);
var novoContador = contador;
var palavra;
var palavraInvertida;

for (var i = 0; i < contador; i++) {
    var letra = entradaDados.question("Digite cada letra palavra: ");
    caracter[i] = letra;
    palavra += caracter[i];
}

for (var j = 0; j < novoContador; j++) {
    contador--;
    caracterInvertido[j] = caracter[contador];
    palavraInvertida += caracterInvertido[j];
}


console.log("Sua palavra: "+palavra.slice(9));
console.log("Palavra invertida: "+palavraInvertida.slice(9));