// Aula 25 - Sobre Do While    12/12/24   - 13:10

// const nome = 'luiz'
// let i = 0;

// while (i < nome.length){
//   console.log(nome[i])
//   i++;
// }

// exemplo real do laço do while
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
let i = 0;

// while ( rand !== 10 ){
//   rand = random(min,max)

//   i++

//   if(rand === 10){
//     console.log('Achei o 10')
//   }

// }



do{
  rand = random(min,max);
  i++
  if(rand === 10){
    console.log(`${rand}`)
  }
} while(rand !== 10 );

console.log(`Foram repetidas ${i} vezes`);