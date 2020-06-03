var lado1, lado2, lado3

var rs = require("readline-sync")

var lado1 = rs.question("Digite o valor do lado 1 ");
var lado2 = rs.question("Digite o valor do lado 2 ");
var lado3 = rs.question("Digite o valor do lado 3 ")

if(lado1 == 0 || lado1 == 0 || lado3 == 0) {
    console.log("Isso não é um triangulo")
} else if ((lado1 == lado2) && (lado3 == lado2)) {
    console.log("Triangulo Equilatero")
} else if ((lado1 == lado2 ) || (lado2 == lado3) || (lado3 == lado1)) {
    console.log("Triangulo isosceles")
} else {
    console.log("Triangulo Escaleno")
}
