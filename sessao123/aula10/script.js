

function enviar() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    console.log(nome.value, sobrenome.value, peso.value, altura.value);

    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      altura: altura.value,
      peso: peso.value,
    };

    pessoas.push(pessoa);
    

    console.log 
    resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} pesa ${pessoa.peso}  e tem ${pessoa.altura} de altura.</p>`
  }

  
 
  form.addEventListener("submit", recebeEventoForm);

  console.log(pessoas);
}

enviar();


// Considerações:
// Conseegui implementar a lógica de 






// Forma para que o navegador não se atualize ao enviar formulário
// form.onsubmit = function (evento){
//   evento.preventDefault();
//    alert(1);
//    console.log("foi enviador")
// };
//Outra forma de colocar uma fuction
// form.addEventListener('submit', (evento) =>{
//   evento.preventDefault();
//   console.log("foi enviado")
// });
