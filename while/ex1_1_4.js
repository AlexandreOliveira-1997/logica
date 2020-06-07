// 4Atividade If e While(Lista 4)1.(OBRIGATÓRIO) ​Escreva um programa que pedirá para o usuário dois números entre 1e 100. O programa deve, então, iterar de um em um do menor pro maior, sempreimprimindo o número na tela do usuário.Entretanto, caso o número seja divisível por 7, o programa deve ao invés disso imprimir a palavra “Ping”.Caso o número seja divisívelpor 5, o programa deve imprimir “Pong”.Caso o número seja divisível por 7 e 5, oprograma deveria imprimir a mensagem “Ping Pong”.Dica: Neste exercício vocês talvezprecisem fazer uso do recurso “user.questionInt() ” que transforma o conteúdo de uminput do usuário de string para inteiro

var rs = require("readline-sync")

var n1 = rs.questionInt("Insira o primeiro número entre 1 e 100 : ")
var n2 = rs.questionInt("Insira o segundo número entre 1 e 100 : ")

if (n1 <= n2) {

    while (n1 <= n2) {
        if (n1 % 7 == 0 && n1 % 5 == 0) {
            console.log("Ping Pong")
        }
        else if (n1 % 7 == 0) {
            console.log("Ping")
        }
        else if (n1 % 5 == 0) {
            console.log("Pong")
        } else {
            console.log(n1)
        }
        n1++
    }
}
else {
    while (n2 <= n1) {
        if (n2 % 7 == 0 && n2 % 5 == 0) {
            console.log("Ping Pong")
        }
        else if (n2 % 7 == 0) {
            console.log("Ping")
        }
        else if (n2 % 5 == 0) {
            console.log("Pong")
        } else {
            console.log(n2)
        }
        n2++
    }
} 
