// // escreva uma função que recebe 2 números e retorne o maior deles
// // Minha solução

// // const num1 = 50;
// // const num2 = 10;

// // function maior(num1,num2){
// //   if(num1 > num2){
// //     return ` O ${num1} é maior do que o ${num2}`;
// //   }
// //   else{
// //    return ` O ${num2} é maior do que o ${num1}`;
// //   }
// // }
// // const resposta = maior(num1,num2)
// // console.log(resposta)

// // Solução do professor:

// // 1° melhoria: Remover o Else, porque se o If for true, o return não irá executar o else, e se for  false, não executará o return do If.
// // 2° Melhoria:  Diminuir o If
// // 3° Melhoria: operação ternária
// // 4° Melhoria: usar um arrowFunction
// // 5° Melhoria:  quando a arrowFunctio tem apenas uma linha não precisa usar {} e o return

// function max(x, y) {
//   // if (x > y) return x;
//   // return y;


//   return x > y ? x : y
// }


// const max2 = (x,y) => x > y ? x : y


// console.log(max(2, 5));
// console.log(max2(20, 5));
