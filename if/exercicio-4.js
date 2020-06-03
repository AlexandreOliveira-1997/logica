// Programa para calcular valor de compra 

var qtd, custo 

var rs = require ("readline-sync")

var qtd = rs.question ("Insira a quantidade de macas")

if (qtd < 12){
    var custo = (qtd * 0,30)
    console.log ( "Valor da compra é R$" + custo);
} else {
    var custo = (qtd * 0,25)
    console.log ("Valor da compra é R$" + custo)
}