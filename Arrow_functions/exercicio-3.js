// Crie um algoritmo que conte quantos carros da Ford existem no cars.json.
// A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros
// “Ford” na propriedade Car para realizar a contagem.

var fs = require ("fs")

var carrosSerializados = fs.readFileSync ("cars.json")

var cars = JSON.parse(carrosSerializados)

var marcaCarros = "Ford"

var marca = cars.includes ((carro) => carro.Car == marcaCarros)

console.log (marca)