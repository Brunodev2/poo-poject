import modificad from "./modificad.js";
import ingrediente from "./ingrediente.js";


let ingredientesOrdenados = modificad.ordenar(ingrediente, 'nome')

let ingredientesCapitalizados = modificad.capitalizar(ingredientesOrdenados, 'nome')


let conteinerIngredientes = document.getElementById('conteiner-ingredientes');

for(let ingredientes of ingredientesCapitalizados){
    let textoHTML = `  
    <div class="ingreditens">
            <img src="${ingredientes.img}">
            <p class="nome-igredientes">${ingredientes.nome}</p>

    </div>`;

   conteinerIngredientes.innerHTML += textoHTML;

}


