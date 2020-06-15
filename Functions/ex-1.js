// (OBRIGATÓRIO) Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R3).
// Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado.

var rs = require('readline-sync')
var raio = rs.questionFloat('Digite o raio: ')

function calculaVolume(raio) {

    var volume = 4 / 3 * 3.14 * (raio ** 3) / 3
    return volume
}

console.log ( calculaVolume(raio))
