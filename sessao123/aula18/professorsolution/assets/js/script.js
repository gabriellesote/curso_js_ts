
// ===========Jeito 1==========
// const h1 = document.querySelector(".container h1");
// const data = new Date();

// function getDayWeekText(diaSemana) {
//   let diaSemanaTexto;
//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = "Domingo";
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = "Segunda";
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = "Terça";
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = "Quarta";
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = "Quinta";
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = "Sexta";
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = "Sábado";
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = "Dia da semana inválido";
//       return diaSemanaTexto;
//   }
// }

// function getMonthText(mes) {
//   let nomeMes;
//   switch (mes) {
//     case 0:
//       nomeMes = "janeiro";
//       return nomeMes;

//     case 1:
//       nomeMes = "fevereiro";
//       return nomeMes;

//     case 2:
//       nomeMes = "março";
//       return nomeMes;

//     case 3:
//       nomeMes = "abril";
//       return nomeMes;

//     case 4:
//       nomeMes = "maio";
//       return nomeMes;

//     case 5:
//       nomeMes = "junho";
//       return nomeMes;

//     case 6:
//       nomeMes = "julho";
//       return nomeMes;

//     case 7:
//       nomeMes = "agosto";
//       return nomeMes;

//     case 8:
//       nomeMes = "setembro";
//       return nomeMes;

//     case 9:
//       nomeMes = "outubro";
//       return nomeMes;

//     case 10:
//       nomeMes = "novembro";
//       return nomeMes;

//     case 11:
//       nomeMes = "dezembro";
//       return nomeMes;

//     default:
//       nomeMes = "Mês inválido";
//       return nomeMes;
//   }
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const dia = zeroAEsquerda(data.getDate());
//   const mes = data.getMonth();
//   const ano = data.getFullYear();
//   const horas = zeroAEsquerda(data.getHours());
//   const minutos = zeroAEsquerda(data.getMinutes());

//   const nomeDia = getDayWeekText(diaSemana);
//   const nomeMes = getMonthText(mes);

//   return `${nomeDia}, ${dia}  de ${nomeMes} de ${ano} ${horas}:${minutos}`;
// }

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }
// h1.innerHTML = criaData(data);

// ===========Jeito 2==========
// const h1 = document.querySelector(".container h1");
// const data = new Date();

// const opcoes = {
//   dateStyle: 'full',
//   timeStyle: 'short'
// 
// h1.innerHTML = data.toLocaleString('pt-br', opcoes)

// ===========Jeito 3 ==========
// (A maneira que fiz)
// const h1 = document.querySelector(".container h1");
// const data = new Date();

// function getDayWeekText(diaSemana) {
//  const dias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']

//  return `${dias[diaSemana]}`
  
// }

// function getMonthText(mes) {
//   const meses = [
//     "Janeiro",
//     "Fevereiro",
//     "Março",
//     "Abril",
//     "Maio",
//     "Junho",
//     "Julho",
//     "Aagosto",
//     "Setembro",
//     "Outubro",
//     "Novembro",
//     "Dezembro",
//   ];

//   return `${meses[mes]}`;
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const dia = zeroAEsquerda(data.getDate());
//   const mes = data.getMonth();
//   const ano = data.getFullYear();
//   const horas = zeroAEsquerda(data.getHours());
//   const minutos = zeroAEsquerda(data.getMinutes());

//   const nomeDia = getDayWeekText(diaSemana);
//   const nomeMes = getMonthText(mes);

//   return `${nomeDia}, ${dia}  de ${nomeMes} de ${ano} ${horas}:${minutos}`;
// }

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }
// h1.innerHTML = criaData(data);