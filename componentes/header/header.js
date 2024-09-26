function header(){
    let div = document.createElement('div');
    div.className = "header";
 
    let h2 = document.createElement('h1');
    h2.className = "titulo";
    h2.innerText = "proyectos";
    div.appendChild(h2);
 
    let btn = document.createElement('div');
    btn.innerText = "git hub"
    div.appendChild(btn);
 
 return div;
 }

 export { header }