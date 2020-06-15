// (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é par ou ímpar
// Utilize o pacote :  https://www.npmjs.com/package/is-odd


var parImpar = require('is-odd')
var rs = require('readline-sync')
const isOdd = require('is-odd')

var numero = rs.question('Digite um numero : ')

if (isOdd(numero)){
    console.log('É impar')
} else {
    console.log('É par')
}