// (OBRIGATORIO)Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no 
// No final imprima se o usuário acertou ou não

const axios = require("axios")
var rs = require("readline-sync")
var rs = rs.question(" Diga Yes ou No : ");

axios.get('https://yesno.wtf/api')
    .then(function(response) {
        if (response.data.answer == question.toLocaleLowerCase()) {
            console.log('Você acertou');
        } else {
            console.log('Você errou');
        }
    })
    .catch(function(error) {
        console.log(error)
    })