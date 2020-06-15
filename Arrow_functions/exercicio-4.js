// (OBRIGATÓRIO) Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da europa e depois disso aplicar a média em cima do campo Horsepower.


var fs= require("fs")
var rs = require('readline-sync')
var carroSerialisados = "cars.json"
var objetoDeserializado = fs.readFileSync(carroSerialisados)
var carros = JSON.parse(objetoDeserializado)

var europeus = 'Europe'
var carrosFiltrados = carros.filter( (carro) => (carro.Origin == europeus))
var soma = 0

carrosFiltrados.forEach((carro) => soma = soma + carro.Horsepower)
var media = soma / carrosFiltrados.length

console.log(media)