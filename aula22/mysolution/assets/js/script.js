const elementos = [
  { tag: 'p', frase: "Frase1" },
  { tag: 'div', frase: "Frase2" },
  { tag: 'footer', frase: "Frase3" },
  { tag: 'section', frase: "Frase4" },
];

const container = document.querySelector(".container");

function criarTags(){
  for(let i = 0; i < elementos.length; i++){
    const tag = elementos[i].tag
    const criar = document.createElement(tag)
    const data = elementos[i].frase
    criar.innerHTML = data
    container.appendChild(criar)
   }
}

criarTags()