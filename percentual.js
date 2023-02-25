var states = [
    {estado: "SP", faturamento: 67.836},
    {estado: "RJ", faturamento: 36.678},
    {estado: "MG", faturamento: 29.229},
    {estado: "ES", faturamento: 27.165},
    {estado: "outros", faturamento: 19.849},
];

var totalEstados = states.length;
var totalMensal = 0;

for(var i = 0; i < totalEstados; i++) {
    totalMensal += states[i].faturamento;
}

var percentualSP = (states[0].faturamento / totalMensal) * 100;
var percentualRJ = (states[1].faturamento / totalMensal) * 100;
var percentualMG = (states[2].faturamento / totalMensal) * 100;
var percentualES = (states[3].faturamento / totalMensal) * 100;
var percentualOutros = (states[4].faturamento / totalMensal) * 100;

console.log("Valor total mensal: R$"+totalMensal.toFixed(3));
console.log("Percentual SP: "+percentualSP.toFixed(2)+"%");
console.log("Percentual RJ: "+percentualRJ.toFixed(2)+"%");
console.log("Percentual MG: "+percentualMG.toFixed(2)+"%");
console.log("Percentual ES: "+percentualES.toFixed(2)+"%");
console.log("Percentual Outros: "+percentualOutros.toFixed(2)+"%");