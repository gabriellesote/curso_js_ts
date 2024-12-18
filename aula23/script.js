// Aula 23 - Sobre For in      11/12/24   -   18:40

// const frutas =  [ 'maçã', 'banana', 'laranja', 'mamão']

// forma 1:
// for (let i = 0; i < frutas.length; i++){
//   console.log(frutas[i])
// }

//For In:
// Ele lê os indices do array
// for(let i in frutas){
//   console.log(frutas[i])
// }

// const pessoa = {
//   nome: 'Gabrielle',
//   sobrenome: "soares",
//   idade: 22
// }

// for ( let chave in pessoa){
//   console.log(chave,pessoa[chave])
// }

// Aula 23.1   - Sobre For Of          12/12/24 10:20

// const nome = ["Gabrielle soares", "marcelo augusto"];

// === Clássico
// for( let i = 0; i< nome.length; i++){
//   console.log(nome[i])
// }

// === For In
// for (let i in nome){
//   console.log(nome[i])
// }

// === For Of se utiliza em objetos interaveis
// for (let valor of nome){
//   console.log(valor)
// }

// console.log("####");

// For Each

// nome.forEach(function(valor, indice, array){
// console.log(valor,indice,array)
// })


// ============= Com objetos:

const pessoa = {
  nome: 'Gabrielle',
  sobrenome: 'Soares'
}
// Só funciona com For In
for ( let chave in pessoa){
  console.log(pessoa[chave])
}



// Resumo
// For Clássico -> Geralmente co  interáveis (array ou objetos)
// For In -> Retorna o índice ou chave (string,array, objetos)
// For Of -> Retorna o valor em si  (string,array, interáveis)

