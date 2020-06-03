var rs = require("readline-sync")

var angulo0 = rs.question("Digite o valor do 1 angulo")
var angulo1 = rs.question("Digite o valor do 2 angulo")
var angulo2 = rs.question("Digite o valor do 3 angulo")

var soma = ( angulo0 + angulo1 + angulo2)

if(soma == 180) {
    if(angulo0 == 90 || angulo1 == 90 || angulo2 == 90) {
        console.log ("Isso é um triangulo retangulo");
    } else if (angulo0 < 90 || angulo1 < 90 || angulo2 < 90) {
        console.log("Isso é um Acutangulo");
    } else {
        console.log("Isso é um Obtusangulo ");
    }
} else {
    console.log("Isso não é um triangulo")
}
