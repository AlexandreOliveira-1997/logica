// (OBRIGATÓRIO) Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o jogador B. 
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números iguais que o jogador A e B colocaram.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3 
// Esse é um problema classicamente conhecido como Inner Join

var rs = require("readline-sync")
var jogador1 = rs.question("Informe o Nome do primeiro jogador : ")
var jogador2 = rs.question("Informe o Nome do segundo jogador : ")
var Numjg1 = []
var Numjg2 = []
var ComparaNumeros = []

for (var i = 0; i < 5; i++){
var pedenumero = rs.questionInt(` ${jogador1}, informe  ${i+1} numero de 0 a 10: `)
Numjg1.push(pedenumero)
}
for (var i = 0; i < 5; i++){
    var pedenumero = rs.questionInt(`${jogador2}, Informe ${i+1} numero de 0 a 10: `)
    if (Numjg1.includes(pedenumero)){ComparaNumeros.push(pedenumero)} 
    Numjg2.push(pedenumero)
}

console.log(`Os numeros escolhidos por ${jogador1} foram ${Numjg1}`);
console.log(`Os numeros escolhidos por ${jogador2} foram ${Numjg2}`);
console.log(`Os numeros iguais foram ${ComparaNumeros}`)

// JEITO PARA FAZER SOMENTE COM IF

// var rs = require('readline-sync');
// var jogador1 = rs.question('Qual e o seu nome? '); // pergunta o nome
// var quantidade = 5
// var numeroJogador1 = []
// for (var cont = 0; cont < quantidade; cont++) {
//     var numeros1 = rs.questionInt('Digite de 1 a 10: '); // pede 5 números de 1 a 10
//     numeroJogador1.push(numeros1)
// }
// console.log(jogador1, numeroJogador1)

// var jogador2 = rs.question('Qual e o seu nome? '); // pergunta o nome
// var quantidade = 5
// var numeroJogador2 = []
// for (var cont = 0; cont < quantidade; cont++) {
//     var numeros2 = rs.questionInt('Digite de 1 a 10: '); // pede 5 números de 1 a 10
//     numeroJogador2.push(numeros2)
// }
// console.log(jogador2, numeroJogador2)

// var numerosIguais = []
// for (var indice1 = 0; indice1 < 5; indice1++) {     // loop para verificar os numeros iguais
//     for (var indice2 = 0; indice2 < 5; indice2++) {
//         if (numeroJogador1[indice1] === numeroJogador2[indice2]) {
//             numerosIguais.push(numeroJogador1[indice1])
//         }
//     }
// }

// console.log("Os numeros iguais sao:", numerosIguais)