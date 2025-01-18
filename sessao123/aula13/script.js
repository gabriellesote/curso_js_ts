  //  Aula 12 - Sobre If e Else - 06/12/24  14:47

/*  
  Entre 0-11 - bom dia 
  Entre 12-17 - boa tarde
  Entre 18-23 - boa noite
*/ 


// const hora = 10

// if (hora <= 11){
//   console.log( 'Bom dia')
// } else if( hora >= 12 && hora <= 17){
//   console.log( 'Boa tarde')
// }
// else if (hora >= 18 && hora <= 23){
//   console.log( 'Boa  noite')
// }else{
//   console.log( 'Até mais')
// }

// const book = {
//   title: 'O Senhor dos Anéis',
//   author: 'J.R.R. Tolkien',
//   year: 1954,
//   pages: 423

// }

// book.hate = 5
// book["author"]
// book.contents = { }
// console.log(book)
 

function factorial (n) {
  let product = 1;
  while ( n> 1){
    product *= n;
    n --;

  }
  return product;
}

console.log(factorial(4))