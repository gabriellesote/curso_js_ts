const paragrafos = document.querySelector(".paragrafos"); // apenas retorna  o primeiro elemento com essa classe
const ps = paragrafos.querySelectorAll("p");

// Pegando o estilo computado do body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor; // aqui tem o estilo do bg do body computado

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF'
}
// minha solução ficou similar 
