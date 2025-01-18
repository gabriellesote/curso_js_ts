//MO atividade timer minha solução

const container = document.querySelector(".container");
const time = document.querySelector(".time");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let data = new Date('December 13, 2024 00:00:00')
const umDia = 60* 60 * 24 * 1000
let intervalId;

function mostrarHora(data){
  return data.toLocaleTimeString('pt-br',{
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",

  })
}
function contar(){
  intervalId = setInterval(function () {
    data.setMilliseconds(data.getMilliseconds() + 1000);
    time.innerHTML = mostrarHora(data);

  }, 1);
}

function parar(){
  setTimeout(function(){

    clearInterval(intervalId)
    let tempoAt = new Date(data.getTime())
    time.innerHTML =   tempoAt.toLocaleTimeString('pt-br', {hour12: false})
  })

}

function clear(){
  clearInterval(intervalId)
   data = new Date('December 13, 2024 00:00:00')
   time.innerHTML  = mostrarHora(data)
}




iniciar.addEventListener("click",function (event) {
  time.classList.remove('time-paused')
    contar()
    },{ once: false}
);


pausar.addEventListener("click", function (event) {
 time.classList.add('time-paused')
 parar()
});




zerar.addEventListener("click", function (event) {
  clear()
  time.classList.remove('time-paused')


});
