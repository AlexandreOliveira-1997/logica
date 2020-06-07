// Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, crie um
// objeto Carro e atribua as entradas do usuário neste objeto.
// No final o programa deve imprimir as informações do carro.
// Utilize a criação de objetos para resolver este problema

var rs = require ("readline-sync")
var fs = require ("fs")

function devolveCarro () {
    var carro = {}
    carro.marca = rs.question("Qual a marca do carro ? ")
    carro.modelo = rs.question("Qual o modelo do carro ? ")
    carro.cor = rs.question("Qual a cor do carro ? ")

    return carro
}

var automóvel = devolveCarro()
console.log("Seu carro é um ", automóvel.modelo, "da marca" , automóvel.marca,"com a cor" , automóvel.cor)

var carroserialiazado = JSON.stringify(automóvel)
var caminhodoarquivo = "./carro.json"
fs.writeFileSync(caminhodoarquivo, carroserialiazado)

