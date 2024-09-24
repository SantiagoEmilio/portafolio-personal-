import { navBarDiv } from "./componentes/navBar/navBar.js";

let DOM = document.querySelector("#root");

/*navBar */
let navBar = document.createElement(`section`);
navBar.className = "nav-Bar";
navBar.appendChild = (navBarDiv);
DOM.appendChild(navBar);

let proyect = document.createElement(`section`);
proyect.classList = "proyect";
proyect.innerText = "Hola mundo soy proyect";
DOM.appendChild(proyect);

