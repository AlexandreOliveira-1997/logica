// (OBRIGATÓRIO) Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o jogador B. 
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números que apenas o jogador A colocou diferente do B.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// Esse é um problema classicamente conhecido como Left Join


 var rs = require('readline-sync');
 var jogador1 = rs.question('Qual e o seu nome? '); 
 var numeroJogador1 = []
 for (var cont = 0; cont < 5; cont++) {
     var numeros1 = rs.questionInt('Digite de 1 a 10: '); 
     numeroJogador1.push(numeros1)
 }
 console.log(jogador1, numeroJogador1)

 var jogador2 = rs.question('Qual e o seu nome? '); 
 var numeroJogador2 = []
 for (var cont = 0; cont < 5; cont++) {
     var numeros2 = rs.questionInt('Digite de 1 a 10: '); 
     numeroJogador2.push(numeros2)
 }
 console.log(jogador2, numeroJogador2)


//  for(var i = 0; i < 5; i++){
//     if (!numeroJogador2.includes(numeroJogador1[i])){
//         numerosDiferentes.push(numeroJogador1[i])
//     }
//  }



var numerosDiferentes = []
for (var indice1 = 0; indice1 < 5; indice1++) {    
    var num = false
    for (var indice2 = 0; indice2 < 5; indice2++) {
        if (numeroJogador1[indice1] == numeroJogador2[indice2]) {
            num = true
            break;
        }
    }
    if (num == false) {
        numerosDiferentes.push(numeroJogador1[indice1])
    }

}

console.log(" Os números diferentes são ", numerosDiferentes)
