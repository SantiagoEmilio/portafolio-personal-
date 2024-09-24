import { navBarDiv } from "./componentes/navBar/navBar.js";
import { proyectos } from "./componentes/PROYECTOS /proyectos.js";

let DOM = document.querySelector("#root");

let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild = (navBarDiv);
DOM.appendChild(navBar);

let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild(proyectos());
DOM.appendChild(proyect);

