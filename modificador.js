
function capitalizarNovo(colecao,atributo){
 // console.log(typeof colecao[0]);
  if(typeof colecao[0] == 'object'){
    var resultado = colecao.map(function(object){

      var letraInicial = object[atributo].charAt(0).toUpperCase();

      var restodoTexto = object[atributo].slice(1);

      object[atributo] = letraInicial + restodoTexto;

      return object;
    });

    console.log(resultado)


  } 
  else if (typeof colecao == 'array') {
   
   console.log(typeof colecao)
  
  }

}



function capitalizar(vetor) {
  var modificado = []; // vetor modificado

  for (var i = 0; i < vetor.length; i++) {
    var letraInicial = vetor[i].charAt(0).toUpperCase();
    var restodoTexto = vetor[i].slice(1);
    var resultado = letraInicial + restodoTexto;

    modificado[i] = resultado; // var modificado recebeu o vetor atualizado
  }

  return modificado;
}


function ordenar(vetor) {
 return vetor.sort(function (a, b) {
    return a.localeCompare(b);
  });
}


export default{
    capitalizarFN: capitalizar,
    ordenarFN: ordenar,
    capitalizarFNovo: capitalizarNovo

}