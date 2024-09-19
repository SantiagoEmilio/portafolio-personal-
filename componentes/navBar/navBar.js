let navBarDiv = document.createElement(`div`);
navBarDiv.className = "nav-bart-Div";

let imgLogo = document.createElement(`img`)
imgLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png";
imgLogo.localName = "img-log"
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement(`h2`);
h2.innerText = "Santiago Lopez";
navBarDiv.appendChild(h2);

export {navBarDiv}



