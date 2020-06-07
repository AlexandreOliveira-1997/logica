// Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
// potente que o valor informado.
// Para isso utiliza a propriedade “Horserpower” do cars.json
// DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
// google.

var rs = require ("readline-sync")
var fs = require ("fs")
var potenciaMinima = rs.questionInt ("Digite a potencia")
var carroSerializados = fs.readFileSync("cars.json")
var cars = JSON.parse (carroSerializados);
var carroes = cars.filter( (carro) => carro.Horsepower > potenciaMinima)
console.log(carroes.length)


