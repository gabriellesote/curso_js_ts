const paragrafos = document.querySelector(".paragrafos"); // apenas retorna  o primeiro elemento com essa classe
const ps = paragrafos.querySelectorAll("p");
const para = document.querySelector('p')


// Pegando o estilo computado do body
const estilosBody = getComputedStyle(document.body);

const colorBody = estilosBody.backgroundColor;  // aqui tem o estilo do bg do body computado

for (let peis of ps){
  peis.style.backgroundColor = colorBody
  peis.style.color = 'white'

}



// const cor = estilosBody.getPropertyValue("background-color")  // o jeito que vi na documentação