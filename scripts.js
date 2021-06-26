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

//CALCULADORA


let showmsj = true;
let calculator = document.querySelector("#calculator");

function pagoSelect(){
    var metpago = document.getElementById("pago").value;
    if(metpago == "MMR"){
        document.getElementById("calculator").innerHTML = `<p>¿Cuánto MMR te gustaría comprar? </br>(Max: 3000 MMR)</p><input type="number" min="0" max="3000" step="30">`;
    }
    else if(metpago =="Presupuesto"){
        document.getElementById("calculator").innerHTML = `<p>¿Cuánto es tu presupuesto? </br>(Max: S/360.00)</p><input type="number" min="0" max="360" step="30">`
    }
    else{
        document.getElementById("calculator").innerHTML = `<p>Seleccione una opción...</p>`;
    }
}

function openMenu(){
    let menu = document.querySelector("#opMenu");
    menu.classList.toggle("show");
}