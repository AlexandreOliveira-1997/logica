// (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é primo ou não
// Utilize o pacote : https://www.npmjs.com/package/prime-number

var rs = require('readline-sync')
var isprime = require('prime-number')

var numero = rs.question('Digite um numero: ')

if (isprime(numero)) {
    console.log('É primo')
} else {
    console.log ('Não é primo')
}