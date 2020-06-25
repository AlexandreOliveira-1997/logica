//EXERCÍCIOS MONGO DB

Exercicio 1 //Escreva uma consulta do MongoDB para exibir todos os
//documentos de restaurantes da coleção
Resolução: > db.restaurants.find();

Exercicio 2 //Escreva uma consulta do MongoDB para exibir os campos
// restaurant_id, nome, bairro e culinária de todos os documentos no restaurante
// de coleção.

Resolução: > db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}).pretty();

Exercicio 3 
//Escreva uma consulta do MongoDB para exibir os campos
// restaurant_id, nome, bairro e culinária, mas exclua o campo _id para todos os
// documentos na coleção.

Resolução: > db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1,"_id":0}).pretty();

Exercicio 4

// Escreva uma consulta do MongoDB para exibir todo o
// restaurante localizado no bairro Bronx.

Resolução: > db.restaurants.find({"borough": "Bronx"}).pretty();

Exercicio 5

// Escreva uma consulta do MongoDB para exibir os 5
// primeiros restaurantes do Bronx.

Resolução: > db.restaurants.find({"borough": "Bronx"} ).limit(5).pretty()

Exercício 6

// Escreva uma consulta do MongoDB para exibir os próximos
// 5 restaurantes depois de pular os 5 primeiros que estão no bairro Bronx.

 Resolução: > db.restaurants.find({"borough": "Bronx"} ).skip(5).limit(5).pretty()

Exercicio 7

// Escreva uma consulta do MongoDB para encontrar os
// restaurantes que atingiram uma pontuação superior a 90.
Resolução: db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}}).pretty();

Exercicio 8 

// Escreva uma consulta do MongoDB para encontrar os
// restaurantes que atingiram uma pontuação maior que 80, mas menor que 100.

Resolução: db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}}).pretty();

Exercicio 9 

// Escreva uma consulta do MongoDB para localizar o ID do restaurante, o
// nome, o bairro e a culinária dos restaurantes que contêm 'Wil' como as três
// primeiras letras do nome.

Resolução: db.restaurants.find({name: /^Wil/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1 }).pretty();

Exercicio 10 

// Escreva uma consulta do MongoDB para encontrar os restaurantes que
// pertencem ao bairro Bronx e prepararam pratos americanos ou chineses.

db.restaurants.find({ "borough": "Bronx" , $or : [{ "cuisine" : "American " }, { "cuisine" : "Chinese" }] }).pretty();

Exercicio 11 

// Escreva uma consulta do MongoDB para localizar o ID do restaurante, o
// nome, o bairro e a cozinha dos restaurantes que pertencem ao bairro Staten
// Island ou Queens ou Bronxor Brooklyn.

db.restaurants.find({"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},
{  "restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1});

