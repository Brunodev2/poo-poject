var ingredientes = ['sal','água','mel','mostarta']; // vetor



function capitalizar(ingredientes){
  var modificado = []; // vetor modificado

  for (var i = 0; i < ingredientes.length; i++) {
    var letraInicial = ingredientes[i].charAt(0).toUpperCase();
    var restodoTexto = ingredientes[i].slice(1);
    var resultado = letraInicial + restodoTexto;

    modificado[i] = resultado; // var modificado recebeu o vetor atualizado
  }

  return modificado;
}


function ordenar(ingredientes){

   ingredientes.sort(function (a, b) {
      return a.localeCompare(b);
    });
}


var resultadoCapitalizado = capitalizar(ingredientes);
var resultadoOrdenado = ordenar(resultadoCapitalizado);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenado);