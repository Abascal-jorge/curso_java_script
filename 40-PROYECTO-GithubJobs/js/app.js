//Variables de selectores html
const formulario = document.querySelector("#formulario");


document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", onSubmitFormulario);
});


function onSubmitFormulario(e){
    e.preventDefault();
    
    //Validar Formulario 
    const busqueda = document.querySelector("#busqueda").value;
    if(busqueda === ""){
        mostrarAlerta("El campo es obligatorio...");
        return;
    }

    consultarEmpleos(busqueda);
}

function consultarEmpleos(buscar){
    const url = `https://jobs.github.com/positions.json?search=${buscar}`;

    fetch(url, {mode: 'cors'})
        .then( respuesta => respuesta.json())
        .then( empleos => console.log(empleos))
}

function mostrarAlerta(mensaje){
    const alerta  = document.createElement("p");
    alerta.classList.add("error");
    alerta.textContent = mensaje;

    const contenidoForm = document.querySelector(".contenido-form");
    contenidoForm.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}