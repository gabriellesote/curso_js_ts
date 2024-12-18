//Aula 31 - Sobre setInterval e setTimeOut         13/12/24  12:58

function mostraHora(){
  let data = new Date()

  return data.toLocaleString('pt-br', {
    hour12: false
  })
}





function fucaoDoInterval(){
  console.log(mostraHora())
}


const timer = setInterval(function(){
  console.log(mostraHora());
}, 1000)

setTimeout(function(){
  clearTimeout(timer)
}, 4000)

setTimeout(function(){
  console.log('Ola mundo')
}, 5000)