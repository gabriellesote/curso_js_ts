// Aula 27 - Sobre Break e Continue   12/12/24   13:39

const numeros  = [1,2,3,4,5,6,7,8,9]

// for  (let numero of numeros){
//   if(numero === 2 || numero === 5 ){
//     console.log(`pulei o numero ${numero}`)
//     continue; // Essa palavra pula para a proxima ação
//   }
//   console.log(numero)

// }


for  (let numero of numeros){
  if(numero === 5 ){
    console.log(`Achei o número ${numero}`)
    break; // pode deixar o código mais rápido, porque ele interrompe o bloco que ele estiver
  }
  console.log(numero)
}


// resumo:
// Continue =>  continua para a proxima interação
// break -> sai da interação 