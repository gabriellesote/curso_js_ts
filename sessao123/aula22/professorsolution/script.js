// ==== Solução do professor
// Elementos recebe um array com 3 objetos
// Outra forma de adicionar texto => Usar innerText quando não tiver tag html ?
// 

const elementos = [
  { tag: "p", frase: "Frase1" },
  { tag: "div", frase: "Frase2" },
  { tag: "footer", frase: "Frase3" },
  { tag: "section", frase: "Frase4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");


for (let i = 0; i < elementos.length; i++) {
  let { tag, frase: texto } = elementos[i];
  let tagCriada = document.createElement(tag)

  let textoCriado = document.createTextNode(texto)
  tagCriada.appendChild(textoCriado)

  // tagCriada.innerText = texto
  // tagCriada.innerHTML = texto
  div.appendChild(tagCriada)


}
container.appendChild(div)