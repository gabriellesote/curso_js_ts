// Aula 5 Sobre Strings  data: 18/11/24  20:25

let umaString = " olá mundo \"texto\"" // escapando uma variaveis 

let exemplo = "gabrielle"
console.log(exemplo.length) // tamanho da string
console.log(exemplo[8]) // acessando a posição da string
console.log(exemplo.charAt(0)) // acessando a posição da string
console.log(exemplo.indexOf('gabri')) // procurando a posição da string
console.log(exemplo.indexOf('g', 2)) // procurando a posição da string apartir de uma posição
console.log(exemplo.lastIndexOf('g', 2)) // procurando a posição da da string a partir de uma posição de trás pra frente
console.log(exemplo.search(/g/))
console.log(exemplo.replace('gabri', 'gabre'))
console.log(exemplo.replace(/e/g, 'i'))
console.log(exemplo.slice(-1))