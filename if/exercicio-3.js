//Programa para verificar se a senha é valida 

var senha

var rs = require("readline-sync")

var senha = rs.questionInt("Insira a senha")

if (senha == 1234) {
  console.log("ACESSO PERMITIDO")
} else {
  console.log("ACESSO NEGADO")
}