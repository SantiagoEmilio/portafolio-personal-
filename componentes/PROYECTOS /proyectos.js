import { header } from "../header/header.js"
import { dataProyectos } from "../../Data/Data.js";

function proyectos(){

    let section = document.createElement('section');
    section.className = 'section-proyectos';
    section.appendChild(header());
    section.appendChild(listaProyectos());


    return section;
}

function listaProyectos(){
    let div = document.createElement('div');
    div.className = "lista-proyectos";

    dataProyectos.forEach((proyecto)=>{
        div.appendChild( item(proyecto.nombre));
    });

    return div;
}



function item(texto,github,githubPage,stacks){
    let div = document.createElement('div');
    div.className = "div-item"; 
    
    let a = document.createElement('a');
    a.className = "link-github-page"
    a.href = githubPage;
    a.innerText = "githubPage";
    div.appendChild(a);

    let stack = document.createElement('div');
    stack.innerText = "[js, CSS, HTML]";
    div.appendChild(stack);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github"
    btnGithub.href = github;
    btnGithub.innerText = "Github" 
    div.appendChild(btnGithub);

    return div;
}


export {proyectos}