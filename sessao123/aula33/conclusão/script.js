//MO CONCLUSÃO de  bloco
// Anotações para estudar depois:
// if(!inputTarefa.value)return;
const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-add");
const tarefas = document.querySelector(".tarefas");

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

btnTarefa.addEventListener("click", function (e) {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar essa tarefa");
  botaoApagar.innerHTML = "❌";
  li.appendChild(botaoApagar);
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}
function criaLi() {
  const li = document.createElement("li");
  return li;
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("❌", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas)
  console.log(tarefasJSON)
  localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas)
  console.log(listaDeTarefas)
  console.log(tarefas)

  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa)
  }
}
adicionaTarefasSalvas()

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();

}

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas()
  }
});
