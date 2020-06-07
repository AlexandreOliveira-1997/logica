// (OBRIGATÓRIO) Escreva um programa que calcule a soma de todos os múltiplos de 3
// e de 5 entre 1 e 1000.

var cont = 0
var result = 0

while(cont <= 1000){
    if (cont % 3 == 0 || cont % 5 == 0){
        var result = result + cont
    }
    
   cont ++
   
}

console.log(result)



