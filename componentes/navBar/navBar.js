let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_10kNUjHNXi_8OiEsEjUllXdK2lt5hL9pQ&s";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Santiago";
navBarDiv.appendChild(h2);

export { navBarDiv };