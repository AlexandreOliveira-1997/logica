var sx = require("readline-sync")
var alt = require("readline-sync")
var sexo = sx.question("Qual o seu sexo? digite 'M' para masculino ou 'F' para Feminino   ")
var altura = alt.question("Qual a sua altura  ")

if(sexo == "M"){
    console.log((72.7*altura)-58)
}
else{
    console.log((62.1*altura)-44.7)
}
