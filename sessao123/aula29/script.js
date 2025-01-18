/**
 * Escreva uma função que recebe um número
 * e retorne o seguinte:
 * N°é divisivel por 3 = Fizz
 * N°é divisivel por 5 = Buzz
 * N°é divisivel por 3 e 5 = FizzBuzz
 * N° NÃO é divisivel por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente um número
 * Use a função com números de 0 a 100
 */

//MO Minha Solução - atividade 29
// const numbers = []

// const adicionarNumbers = (array)=>{
//   for(let i = 0; i < 100; i++){
//     array.push(i)
//   }
// }

// adicionarNumbers(numbers)
// // console.log(numbers)

// const fizz = (array) => {
//   for(let index of array){
//     if(index % 3 === 0){
//       console.log(`${index}: Fizz`)
//     }
//   }
// }

// const buzz = (array) => {
//   for(let index of array){
//     if(index % 5 === 0){
//       console.log(`${index}: Buzz`)
//     }
//   }
// }
// const buzzfizz = (array) => {
//   for(let index of array){
//     if(index % 5 === 0 &&  index % 3 === 0 ){
//       console.log(`${index}: BuzzFizz`)
//     }
//   }
// }

// const teste1 = fizz(numbers)
// console.log(teste1)
// console.log('===')
// const teste2 = buzz(numbers)
// console.log(teste2)
// console.log('===')
// const teste3 = buzzfizz(numbers)
// console.log(teste3)

//MO  Professor Solução - Atividade 29

function fizzBuzz(n) {
  if (typeof n !== "number") return NaN;
  if (n % 5 === 0 && n % 3 === 0) return " FizzBuzz";
  if (n % 3 === 0) return " Fizz";
  if (n % 5 === 0) return " Buzz";
  return n;
}

console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 50; i++) {
  console.log(i, fizzBuzz(i));
}
