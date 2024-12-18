// Aula 19 - Mais sobre var const e let         - 10/12/2024    16:06


// Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função 

// let nome = 'luiz'
// var nome2 = 'jose'
// console.log(nome,nome2)
// if(true){
//   let nome = 'otavio'
//   var nome2 = 'rogerio'
//   console.log(nome,nome2)

//   if(true){
//     var nome2 = 'marcelo'

//   }
// }
// console.log(nome,nome2)

var sobrenome = 'soares'

function  falaOi(){
  var nome = 'gabi'
  console.log(nome, sobrenome)
}

 falaOi()