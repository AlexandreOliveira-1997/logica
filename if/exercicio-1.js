//Programa para ler ano de nascimento e se pessoa pode votar.

var anonasc, ano 

var rs = require("readline-sync") // Pacote de entrada do usuário

var anonasc = rs.question ("Insira ano de nascimento") // Lê ano de nascimento do user
var ano = rs.question ("Insira ano atual")

if(ano - anonasc < 16 ){
    console.log("Nao pode votar") // Se idade for menor que 16

} else {
    console.log("Já pode votar");
}