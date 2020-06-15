// (OBRIGATÓRIO) Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator


var rs = require('readline-sync');
var { AgeFromDateString } = require('age-calculator');

var data = rs.question('Digite sua data de nascimento (yyyy-mm-dd): ');

var ageFromString = new AgeFromDateString(data).age;
console.log("Sua idade é de ", ageFromString, 'anos');