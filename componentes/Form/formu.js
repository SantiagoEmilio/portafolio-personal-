let contactoForm = document.createElement('div');
contactoForm.className = "contacto-Form";


let titContactar = document.createElement('h3');
titContactar.className = "tit-contactar";
titContactar.innerText = "Contactar";
contactoForm.appendChild(titContactar);

let divBaseTit = document.createElement('div');
divBaseTit.className = "div-base-tit";
divBaseTit.appendChild(titContactar);
contactoForm.appendChild(divBaseTit);

let divForm1 = document.createElement('input');
divForm1.className = "form1";
contactoForm.appendChild(divForm1);

let divForm2 = document.createElement('input');
divForm2.className = "form2";
contactoForm.appendChild(divForm2);

let divForm3 = document.createElement('textarea');
divForm3.className = "form3";
contactoForm.appendChild(divForm3);

let divBot = document.createElement('div');
divBot.className = "botForm";
divBot.innerText = "Enviar";
contactoForm.appendChild(divBot);

let divBaseBtn = document.createElement('div');
divBaseBtn.className = "div-base-btn";
divBaseBtn.appendChild(divBot);
contactoForm.appendChild(divBaseBtn);

export { contactoForm };
