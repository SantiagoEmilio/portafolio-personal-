function proyectos(){
    let section = document.createElement('section');
    section.appendChild(header())
    section.appendChild(item())
    section.className = "section-proyectos";
    


    return section;
}


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


function item(){
   let div = document.createElement('div');
   div.innerText = "item listo"
   div.className = "item";

   return div;
}

export {proyectos}
