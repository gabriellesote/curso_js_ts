// Aula 20 - Sobre atribuição via desestruturação    11/12/24   -  11:29

// const letras = ['B', 'C', 'A'];
// let a = 'A';
// let b = 'B';
// let c = 'C';



// [a, b, c] = letras;
// console.log(a, b, c)


// // Exemplo 2:
// const numeros = [1,2,3,4,5,6,7,8,9]
// //Operador ... rest, que pega o resto de algo, nesse caso o array
// const [primeiro, segundo,terceiro, ...resto] = numeros;

// console.log(primeiro, segundo,terceiro)
// console.log(resto)

//=========== Exemplo3===========
//Caso quiser pegar um numero sim e outro não -
// É só deixar espaços vazios
// const numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000]
// const [um, , tres, quatro, , seis] = numeros
// console.log(um,tres,quatro,seis)



// // ======= Exemplo 4 ========
// //                  0        1       2
// //                0 1 2   0 1 2   0 1 2
// const numeros = [[1,2,3],[4,5,6],[7,8,9]]
// const [, [, , seis]] = numeros  // mt complexo
// console.log(seis)

// // mais simples:
// const [lista1,lista2,lista3] = numeros
// console.log(lista3[2])

// Aula 20.1  -  Sobre atribuição via desestruturação com objetos    11/12/24   -  13:52

const pessoa = {
  nome: 'Gabrielle',
  sobrenome: 'Soares',
  idade: 22,
  endereco: {
    rua: 'Adalias',
    numero: 132
  }
}

// // const nome = pessoa.nome;
// // da para mudar o nome da variavel, e tem como por um valor padrão na mesma
// const { nome: n = '', sobrenome, idade} = pessoa
// console.log(n,sobrenome,idade)

// // acessar o endereço
// const { endereco: { rua: r = 'none' , numero}, endereco} = pessoa
// console.log(r, numero, endereco)

//  tem como atribuir em uma variavel as infos
const alo = { nome, ...resto} = pessoa
console.log(alo)
