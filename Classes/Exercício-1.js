// Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
// Para isso :
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
// inicialize as propriedades com estes valores.
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
// cor.
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
// e cor.
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

var rs = require('readline-sync');
class carro {
    constructor(nome, modelo, cor) {
        this.nome = nome;
        this.modelo = modelo;
        this.cor = cor;
    }
}
var marca1 = rs.question('Qual a marca do veiculo? ')
var modelo1 = rs.question('Qual o modelo do veiculo? ')
var cor1 = rs.question('Qual a cor do veiculo? ')
var carro1 = new carro(marca1, modelo1, cor1);
var marca2 = rs.question('Qual a marca do veiculo? ')
var modelo2 = rs.question('Qual o modelo do veiculo? ')
var cor2 = rs.question('Qual a cor do veiculo? ')
var carro2 = new carro(marca2, modelo2, cor2);
var garagem = []
if(marca1 == marca2 && modelo1 == modelo2){
    console.log('Os carros sao iguais')
}
console.log('Os carros nao sao iguais') 



