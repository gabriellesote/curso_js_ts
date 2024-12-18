// Aula 30 - Sobre Try Catch   - 12/12/24  17:23
// Não expor coisas internas do programa, não é seguro e não é bom  para o user final
// Não lançar errors no frontend


// try{
//   console.log(naoexiste)
// } catch(e){
//   console.log('Não existe', e.message)
//   console.log(e)
// }

// function soma(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw  new TypeError("x e y precisam ser numeros")
//   }

//   return x + y;
// }

// try {
//   console.log(soma(1, 10));
//   console.log(soma("a", 10));
// } catch (e) {
//   console.log('Deu erro amigão');
// }


// Aula 30.1    sobre try catch e finally       12/12/24   17:23

// Não criar código muito aninhado!!
// try {
//   console.log("a");
// } catch (e) {
//   // executado quando dá erro
//   console.log("trantado um erro ");
// } finally {
//   // Sempre é executado, dando err ou não
//   console.log("Sempre sou executado B) - Finally");
// }


const retornaHora = (data) => {
  if( data  && !(data instanceof Date)){
    throw new TypeError('Esperando instância de Date')
  } // Se não for do tipo Date ele irá  lançar esse erro


  if(!data){
    data = new Date()
  } // Se não  enviar nenhuma data, ele fará uma

  return data.toLocaleString('pt-BR', {

    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try{
  const data = new Date('01-01-1970  12:59:12')
  const hora = retornaHora(data)
  console.log(hora)

} catch(e){
  // tratando o erro
  console.log(e.message)  // Se colocar e.message vem uma mensagem curta
}
finally{
  console.log('Bom dia')
}


