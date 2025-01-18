// Aula 35   Sobre parametros da função    -   30/12/24   16:53

// function funcao(){
//   console.log(arguments)  // ao arguments só funciona para esse tipo de function
// }
// funcao('valor',1,2,3,4,5,6)  // em teoria era pra dar erro, mas o js não liga


// function funcao2([v1,v2,v3]){
//   console.log(v1,v2,v3) 
// }
// funcao2([1,4,56]) 


function funcao3(operador,acumulador,...numeros){
  for(let numero of numeros){
    if(operador === '+') acumulador += numero;
  }
  console.log(acumulador)
}
funcao3('+', 0, 20, 30,40)  

