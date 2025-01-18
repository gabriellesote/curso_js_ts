let data = new Date('December 13, 2024 00:00:00')
let intervalId;
function mostrarTempo() {
  return data.toLocaleTimeString("pt-br", {
    hour12: false,
  });
}

function contar(){
  intervalId = setInterval(function(){
    data.setMilliseconds(data.getMilliseconds() + 1000)
    console.log(mostrarTempo(data))
  },
  1000);

}



function parar() {

  setTimeout(function(){
    console.log('parando')
    clearInterval(intervalId)
  },1000)


}

const teste =  contar(data)
parar()

console.log(teste)