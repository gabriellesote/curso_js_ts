const container = document.querySelector(".container");

function exibir() {
  const p = criarP();
  const data = dataHoje();
  container.appendChild(p);

  p.innerHTML = data;
}

function criarP() {
  const p = document.createElement("p");

  return p;
}

// Data:

const date = new Date();
function dataHoje() {
  const diaNaSemana = diaSemana(date.getDay());
  const dia = zeroAEsquerda(date.getDate());
  const mes = pegarMes(date.getMonth());
  const ano = zeroAEsquerda(date.getFullYear());
  const horas = zeroAEsquerda(date.getHours());
  const minutos = zeroAEsquerda(date.getMinutes());
  const segundos = zeroAEsquerda(date.getSeconds());

  return ` ${diaNaSemana}, ${dia} de ${mes} ${ano} - ${horas}:${minutos}:${segundos}`;
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function diaSemana(dia) {
  const dias = [
    "Domingo",
    "Segunda-Feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  return `${dias[dia]}`;
}

function pegarMes(mes) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Aagosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${meses[mes]}`;
}

exibir();
