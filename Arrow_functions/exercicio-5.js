//Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
//Utilize o campo Horsepower para descobrir qual é o mais potente
var lodash = require('lodash')
var fs = require('fs')
var json = fs.readFileSync("cars.json")
var carros = JSON.parse(json)
var carrosOrdenadosPorPotencia = lodash.sortBy(carros, c => c.Horsepower)
var carroMaisPotente = carrosOrdenadosPorPotencia[carrosOrdenadosPorPotencia.length - 1]
console.log(carroMaisPotente.Car)