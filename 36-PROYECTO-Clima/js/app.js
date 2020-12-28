const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");


window.addEventListener("load", () => {
    formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    //Validar
    const ciudad = document.querySelector("#ciudad").value;
    const pais = document.querySelector("#pais").value;

    if( ciudad === "" || pais === ""){
        mostrarAlerta("Todos los campos son obligatorios", "error");
        return;
    }
    //Consultariamos a la API
    consultarAPI(ciudad, pais);
}



function mostrarAlerta(mensaje, tipo){
    const alerta = document.createElement("div");
    alerta.innerHTML = `
        <p>${mensaje}</p>
    `;

    if(tipo === "error"){
        alerta.classList.add("error");
    }

    resultado.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);

}

function consultarAPI(ciudad, pais){
    const appID = "d26894095eb9d4a1091bdc1ed91de5e2";
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
    //console.log(urlApi);

    fetch(urlApi)
        .then( resultado => resultado.json())
        .then( respuesta => {
            limpiarHTML();
            if( respuesta.cod === "404"){
                mostrarAlerta("Ciudad no encontrada", "error");
            }else{
                activarSpinner();
                setTimeout(() => {
                    mostrarHTML(respuesta);
                }, 3000);
            }
        })
}

function mostrarHTML(respuesta){

    const { temp_max, temp_min, temp } = respuesta.main;

    const contenidoHTML = document.createElement("div");
    contenidoHTML.classList.add("clima");
    contenidoHTML.innerHTML = `
        <h2>${respuesta.name}</h2>
        <p><span>Temperatura Actual: </span>${(temp - 273.15).toFixed(2)} °C</p>
        <p><span>Temperatura Minima: </span>${(temp_min - 273.15).toFixed(2)} °C</p>
        <p><span>Temperatura Maxima: </span>${(temp_max - 273.15).toFixed(2)} °C</p>
    `;

    resultado.appendChild(contenidoHTML);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.firstChild.remove();
    }
}

function activarSpinner(){
    const spinner = document.createElement("div");
    spinner.classList.add("sk-circle");
    spinner.innerHTML = `
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
    `;
    resultado.appendChild(spinner);
    setTimeout(() => {
        spinner.remove();
    }, 3000);
}