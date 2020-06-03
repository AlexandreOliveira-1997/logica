var rs = require("readline-sync")

var num = rs.questionInt ("Digite um numero ")

if ((num >=100 ) && (num <=200 )) {
    console.log(" Esse numero está entre 100 e 200")
}  else {
    console.log ("Esse numero não esta entre 100 e 200")
}
