// Aula 21 - Sobre o For     - 11/12/24   14:09

// for (let i = 10; i >= 0; i-=5) {
//   console.log(i);
// }
// // Isso aqui nunca pensei em fazer: pular de 10 em 10 !!!!!!!
// for (let i = 0; i <= 20; i++) {
//   const par  = i%2 === 0 ? `${i}: par` : ''
//   console.log(par)
// }

const frutas = [ 'maçã', 'pera', 'uva', 'melancia', 'mamão', 'banana', 'pilão']
console.log(frutas.length)

for (let i=0; i < frutas.length; i++){
  console.log(`Indice ${i}`, frutas[i])
}