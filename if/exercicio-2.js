// Programa para mostrar se número é par ou impar
var num

var rs = require("readline-sync")

var num = rs.question ("Insira um numero")

if(num % 2 == 0 ){
    console.log("Numero e par")
} else{
    console.log("Numero e impar")
}