


document.getElementById('botao').addEventListener('click', function(){
  const peso =  document.getElementById('peso')
  const altura =  document.getElementById('altura')
  const resultado = document.querySelector('.resultado')



  const imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));

 
  if(imc < 18.5 ){
    resultado.innerHTML= ` <p> Abaixo do Peso -  IMC: ${imc.toFixed(1)} </p>` 
  }
  else if(imc> 18.5 && imc <= 24.9){
    resultado.innerHTML= ` <p> Peso Normal - IMC: ${imc.toFixed(1)} </p>` 
  }
  else if( imc >= 25 && imc <= 29.9 ){
    resultado.innerHTML= ` <p> Sobrepeso - IMC: ${imc.toFixed(1)} </p>` 
  }
  else if(imc >= 30 && imc <= 34.9 ){
    resultado.innerHTML= ` <p> Obesidade grau 1 - IMC: ${imc.toFixed(1)} </p>` 
  }
  else if(imc >= 35 && imc <= 39.9  ){
    resultado.innerHTML= ` <p> Obesidade grau 2 - IMC: ${imc.toFixed(1)} </p>` 
  }
  else if(imc > 40){
    resultado.innerHTML= ` <p> Obesidade grau 3 - IMC: ${imc.toFixed(1)} </p>` 
  }else{
    resultado.innerHTML= ` Valores invalidos
     `;
  }
 

});