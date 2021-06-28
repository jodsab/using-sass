
function openMenu(){
    let menu = document.querySelector("#opMenu");
    menu.classList.toggle("show");
}


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
crearCarta("images/heraldo.png","100% dscto","99/99/9999");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/leyenda.png","10% dscto","12/07/1995");
crearCarta("images/divine.png","10% dscto","12/07/1995");
crearCarta("images/inmortal.png","2% dscto", "15/05/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/inmortal.png","2% dscto", "15/05/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/inmortal.png","2% dscto", "15/05/1995");
crearCarta("images/heraldo.png","100% dscto","99/99/9999");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/inmortal.png","2% dscto", "15/05/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/inmortal.png","2% dscto", "15/05/1995");
crearCarta("images/ancestro.png","50% dscto","19/07/1995");
crearCarta("images/inmortal.png","2% dscto", "15/05/1995");
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
        document.getElementById("calculator").innerHTML = `<p>¿Cuánto MMR te gustaría comprar? </br>(Max: 3000 MMR)</p><input id="pormmr" type="number" min="0" max="3000" step="10">`;
    }
    else if(metpago =="Presupuesto"){
        document.getElementById("calculator").innerHTML = `<p>¿Cuánto es tu presupuesto? </br>(Max: S/360.00)</p><input id="porsoles" type="number" min="0" max="360" step="10">`
    }
    else{
        document.getElementById("calculator").innerHTML = `<p>Seleccione una opción...</p>`;
    }
}

var botonCalcular = document.getElementById("calcular");



var precioAnc = 30;
var precioDiv = 35;
var precioInm = 45;
var precio6k = 50;
var precio65k = 60;

var saltoMmr = 120;


botonCalcular.addEventListener("click",()=>{

    var total = 0;
    var total2= 0;

    var mmractualchaval = document.getElementById("mmractual").value;
    var valoropt = document.getElementById("pago").value;

    if(valoropt == "MMR"){

        var mmrxd = document.getElementById("pormmr").value;

        if( mmractualchaval < 4620 && mmractualchaval > 10){
            total = (mmrxd/saltoMmr)* precioAnc;
        }
        else if( mmractualchaval < 5630 && mmractualchaval >= 4620){
            total = (mmrxd/saltoMmr)*precioDiv;
        }
        else if( mmractualchaval < 6000 && mmractualchaval >=5630){
            total = (mmrxd/saltoMmr)*precioInm;
        }
        else if ( mmractualchaval < 6500 && mmractualchaval >= 6000){
            total = (mmrxd/saltoMmr)*precio6k;
        }
        else if( mmractualchaval <= 7000 && mmractualchaval >= 6500){
            total = (mmrxd/saltoMmr)*precio65k;
        }
        else{
            alert("No ingresó cantidad adecuada");
        }
        total = Math.ceil(total);
        alert(total);
    }
    else if (valoropt == "Presupuesto"){
       var pagoxd = document.getElementById("porsoles").value;
       pagoxd = pagoxd/10;

       if( mmractualchaval < 4620 && mmractualchaval > 10){
           total2 = (pagoxd/precioAnc)*saltoMmr;
       }
       else if( mmractualchaval < 5630 && mmractualchaval >= 4620){
           total2 = (pagoxd/precioDiv)*saltoMmr;
       }
       else if( mmractualchaval < 6000 && mmractualchaval >=5630){
           total2 = (pagoxd/precioInm)*saltoMmr;
       }
       else if ( mmractualchaval < 6500 && mmractualchaval >= 6000){
           total2 = (pagoxd/precio6k)*saltoMmr;
       }
       else if( mmractualchaval <= 7000 && mmractualchaval >= 6500){
           total2 = (pagoxd/precio65k)*saltoMmr;
       }
       else{
           alert("No ingresó cantidad adecuada");
       }
       total2 = Math.ceil(total2);
       alert(total2*10);


    }
    else{
        alert("Seleccione una opción de compra");
    }
});

