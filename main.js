import { navBarDiv } from "./componentes/navBar/navBar.js";
import { proyectos } from "./componentes/PROYECTOS /proyectos.js";
import { contactoForm } from "./componentes/Form/formu.js";
import { componentesHerramientas } from "./componentes/MenuLateral/menu.js";


/* COMPONENTES DE LA PÁGINA */ 

let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

/* Proyectos */
let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild(proyectos());
DOM.appendChild(proyect);




