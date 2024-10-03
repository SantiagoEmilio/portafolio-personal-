let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Santiago";
navBarDiv.appendChild(h2);

export { navBarDiv };


