//MO ATIVIDADE timer - Solução Professor
//MO LEMBRETE Ler sobre TimeZone
// Ele vai basear na  data 0 new Date(0)
// data.toLocaleTimeString('pt-br', {hour12: false}) fica as 21: por causa do Time Zone
// timeZone:'UTC'

const relogio = document.querySelector(".relogio");
let segundos = 0;
let timer;

function relogioIni() {
  function getTimeFromSeconds(sec) {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString("pt-br", { hour12: false, timeZone: "UTC" });
  }

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      relogio.innerHTML = `00:00:00`;
      segundos = 0;
    }
    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }
  });
}
relogioIni();



// Ele fez uma lógica de selecionar vários botões com:

/*
document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("zerar"))
*/

// básicamente ele escuta onde você clica, ai você coloca isso em uma variavel (el) depois faz um if para cada botão.