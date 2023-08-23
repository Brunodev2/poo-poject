
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
    ordenarFN: ordenar

}