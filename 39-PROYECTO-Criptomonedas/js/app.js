//Variables de los selectores html
const selectInput = document.querySelector("#criptomonedas");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

myApp();


function myApp(){
    document.addEventListener("DOMContentLoaded", llenarMonedas);
    formulario.addEventListener("submit", onSubmitConsultar);
}

//Codigo al presionar en boton consultar
function onSubmitConsultar(e){
    e.preventDefault();
    //Validar Formulario
    const moneda = document.querySelector("#moneda").value;
    const criptomoneda = document.querySelector("#criptomonedas").value;
    if(moneda === ""  || criptomoneda === ""){
        if(!document.querySelector(".error")){
            const parrafoError = document.createElement("p");
            parrafoError.textContent = "Todos los campos son obligatorios";
            parrafoError.classList.add("error");
            formulario.insertBefore(parrafoError, document.querySelector("#formulario .row"));
            setTimeout(() => {
                parrafoError.remove()
            }, 3000);
        }
        return;
    }

    consultarPrecioCriptomoneda(moneda, criptomoneda);
}

//Funcion para cotizar criptomoneda segun la moneda y tipo criptomoneda
function consultarPrecioCriptomoneda(moneda, criptomoneda){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    fetch(url)
        .then( resultado => resultado.json() )
        .then( precio => {
            mostrarPrecioCriptomoneda(precio.DISPLAY[criptomoneda][moneda]);
        })
}


function mostrarPrecioCriptomoneda(precio){
    limpiarHTML();
    spinner();
    setTimeout(() => {
        //console.log(precio);
        const { PRICE, LOWDAY, HIGHDAY, LASTUPDATE } = precio;
        const tipoMoneda = document.createElement("h2");
        const pricedaylow = document.createElement("p");
        const pricedayhigh = document.createElement("p");
        const lastupdate = document.createElement("p");

        tipoMoneda.innerHTML = `El precio es: ${PRICE}`;
        pricedaylow.innerHTML = `El precio mas bajo del dia <span>${LOWDAY}</span>`;
        pricedayhigh.innerHTML = `El precio mas alto del día: <span>${HIGHDAY}</span>`;
        lastupdate.innerHTML  = `Ultima Actualización: ${LASTUPDATE}`;

        resultado.appendChild(tipoMoneda);
        resultado.appendChild(pricedayhigh);
        resultado.appendChild(pricedaylow);
        resultado.appendChild(lastupdate);
    }, 3000);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.firstChild.remove();
    }
}

function spinner(){
    const divSpinner = document.createElement("div");
    divSpinner.classList.add("spinner");
    divSpinner.innerHTML = `
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
    `;
    resultado.appendChild(divSpinner);

    setTimeout(() => {
        divSpinner.remove();
    }, 3000);
}




//Consultando api 10 monedas mas utilizadas fetch, Llena select monedas al cargfar el document
function llenarMonedas(){
    //Consultar Api para obtener las 10 monedas mas usadas
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    fetch(url)
        .then( resultado => resultado.json())
        .then( monedas => llenarSelect(monedas.Data))
}

//LLnenando select option de las monedas mas utilizadas
function llenarSelect(monedas){ 

    monedas.forEach( moneda => {
        const { FullName, Name } = moneda.CoinInfo;
        const opcionSelect = document.createElement("option");
        opcionSelect.value = Name;
        opcionSelect.textContent = FullName; 
        selectInput.appendChild(opcionSelect);
    });
}



