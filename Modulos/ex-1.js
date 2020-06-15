// (OBRIGATÓRIO) Faça uma programa que receba 4 notas e calcule a mediana e apresente ao usuário o resultado.
// Utilize o pacote : https://www.npmjs.com/package/median


var median = require("median")
var rs = require("readline-sync")

var notas = []

console.log('Digite as notas: ');
for (var i = 0; i < 4; i++) {
    var nota = rs.questionInt("");
    notas[i] = nota;
}

var mediana = median(notas)

console.log(" A mediana é " , mediana)