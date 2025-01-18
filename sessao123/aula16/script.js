// Aula 16 -  Sobre Objeto Date   09/12/24   21:54

// 60s * 60s  = 1hora  -> 1h * 3 = 3horas  Agora multiplica por 1000 porque o javascript usa milisegundos 
// const tresHoras = 60 *  60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

// O mês começa do 0 , então o primeiro mês é 0 e o último mês é 11
// const data = new Date(2019,3, 20, 15); // a, m, d, h, M, s, ms
// console.log(data.toString())

// Em dataString: 
// const data = new Date('2019-04-20 20:20:59');  
// console.log('dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // para pegar o mês certo, tem que por 
// console.log('dia semana', data.getDay()); // 0: Domingo - 6: Sábado
// console.log(Date.now()); // 0: Domingo - 6: Sábado


function zeroAEsquerda(num){
  return  num >= 10 ? num : `0${num}`;
}
 
function formataData(data){
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const minuto = zeroAEsquerda(data.getMinutes());
   const segundo = zeroAEsquerda(data.getSeconds());

   return ` ${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil)

