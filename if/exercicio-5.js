// var maior, medio , menor

var rs = require("readline-sync")


var numero1 = rs.question( "Digite o primeiro numero")

var numero2 = rs.question( "Digite o segundo numero")

var numero3 = rs.question( "Digite o terceiro numero")

var numeros = [numero1, numero2, numero3]

function compararNumeros(a, b) {
    return a - b;
}

var ordenados = numeros.sort();

 console.log( numeros.sort(compararNumeros));

// if((numero1 > numero2) && (numero1 > numero3)) {
//     maior = numero1;

//     if (numero2 > numero3) {
//         medio = numero2;
//         menor = numero3;

//         console.log(menor, medio, maior);
//     }

// } else if ((numero2 > numero3) && (numero2 > numero1)) {
//     maior = numero2;

//     if (numero1 > numero3) {
//         medio = numero1;
//         menor = numero3;

//         console.log(menor, medio, maior);
//     }
// } else if ((numero3 > numero2) && (numero3 > numero1)){
//     maior = numero3;

//     if (numero2 > numero1) {
//         medio = numero2;
//         menor = numero1;

//         console.log(menor, medio, maior)
//     }
// }