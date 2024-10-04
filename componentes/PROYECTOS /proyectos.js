import { header } from "../header/header.js"
import { dataProyectos } from "../../Data/Data.js";

function proyectos(){

    let sectionP = document.createElement('section');
    sectionP.className = "secProyectos";
    sectionP.appendChild(header());
    sectionP.appendChild(listaProyectos());

}


function listaProyectos(){
    let div = document.createElement('div');
    div.className = "lista-proyectos";

    // se crea la variable cadaLetra que almacena las letras de dataproyecto
    // proyecto representa cadda elemento de dataProyectos
    dataProyectos.forEach( (proyecto) => {

        div.appendChild(item(proyecto.nombre, proyecto.descripcion ,  proyecto.githubPage, proyecto.github, proyecto.stacks));

    }); // forEach recibe como paragithubPagemetro una funcion (funcion de flecha)

    return div;
}


// FUNCION PARA LISTA

function item(nombre, descripcion, githubPage, github, stacks){

    let div = document.createElement('div');
    div.className = "div-item";

    let titNombre = document.createElement('h1');
    titNombre.className = "tit-Nombre";
    titNombre.innerText = nombre;
    div.appendChild(titNombre);

    let descipcionText = document.createElement('p');
    descipcionText.className = "descripcion-text";
    descipcionText.innerText = descripcion;
    div.appendChild(descipcionText);

    let a = document.createElement('a');
    a.className = "a-githubPage";
    a.href = githubPage;
    a.innerText = "githubPage";
    div.appendChild(a);

    let stack = document.createElement('div');
    stack.className = "stack-div";
    stack.innerText = "[js,CSS,HTML]";
    div.appendChild(stack);

    let botGithub = document.createElement('a');
    botGithub.className = "btn-Github";
    botGithub.href = github;
    botGithub.innerText = "Github";
    div.appendChild(botGithub);

    return div;
}


export { proyectos }


