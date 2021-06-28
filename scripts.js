let divCartas = document.querySelector("#section");

function crearCarta(src, dsct, vence){
    const newDiv = document.createElement("div");
    let img = document.createElement("img");
    let h2text = document.createElement("h2");
    const fvenc = document.createElement("p");
    const button = document.createElement("button");

    h2text.innerHTML = dsct;
    img.src = src;
    fvenc.innerHTML = vence;
    button.innerHTML = "COMPRAR";

    newDiv.classList.add("carta1");

    newDiv.appendChild(img);
    newDiv.appendChild(h2text);
    newDiv.appendChild(button);
    newDiv.appendChild(fvenc);

    divCartas.appendChild(newDiv);
}

crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");

function scrollSectionRight(){
    divCartas.scrollBy({
        left: -400,
        behavior: 'smooth'
    })
}

function scrollSectionLeft(){
    divCartas.scrollBy({
        left: 400,
        behavior: 'smooth'
    })
}


function openMenu(){
    let menu = document.querySelector("#opMenu");
    menu.classList.toggle("show");
}

