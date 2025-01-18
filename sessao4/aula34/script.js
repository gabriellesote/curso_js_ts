// Aula 34 - Sobre Funções      30/12/24   05:45

// Function Hoisting quando é declarada dessa maneira
falaOi()
function falaOi() {
  console.log("ola mundo!");
}

// First-Class objects (Objetos de primeira CLasse)
// Pode ser tratado como dado, Function expression
const souUmDado = function() {
  console.log("Dado!");
}


function executaFuncao(funcao){
  funcao()
}
executaFuncao(souUmDado)


// Arrow Function
const funcaoArrow = () =>{
  console.log("Sou uma arrow Function!")
}

funcaoArrow()

// Dentro de um objeto pode ter uma função

const obj = {
  falar: function(){
    console.log('falar')
  }
}

const obj2 = {
  falar(){
    console.log('falar 2')
  }
}


obj.falar()
obj2.falar()