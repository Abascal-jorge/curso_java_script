//Variables  A elementos html
const formulario = document.querySelector("#formulario");
const contenidoMensaje = document.querySelector("#tweet");
const listatweets = document.querySelector("#lista-tweets");


//Variables
let mensaje = "";
let listaMensaje = []; 

MyApp();

function MyApp(){
    document.addEventListener("DOMContentLoaded", elementosMensajes);
    contenidoMensaje.addEventListener("change", obtenerDatos);
    formulario.addEventListener("submit", enviarMensaje);
}

//Obteniedo datos
function obtenerDatos(e){
    mensaje = e.target.value;
}

//Agregar mensaje 
function enviarMensaje(e){
    e.preventDefault();
    if(mensaje === ""){
        const mensajeError = document.createElement("div");
        mensajeError.classList.add("error");
        mensajeError.textContent = "Error tweet vacio";

        const contenedor = document.querySelector(".container");
        contenedor.appendChild(mensajeError);

        setTimeout(() => {
            contenedor.removeChild(mensajeError);
        }, 3000);

        return;
    }

    listaMensaje = [...listaMensaje, mensaje];
    localStorage.setItem("ejemplo", JSON.stringify(listaMensaje));
    elementosMensajes();
    mensaje = "";
    formulario.reset();
}

//Agregar mensajes en el listado html
function elementosMensajes(){
    limpiarHTML();
    listaMensaje = localStorage.getItem("ejemplo") === null ? [] : JSON.parse(localStorage.getItem("ejemplo"));
    //console.log(mensajesLista);
    if(listaMensaje){
        listaMensaje.map( mensaje => {
            const parrafo = document.createElement("div");
            parrafo.innerHTML = `
                <li> ${mensaje} </li>
                <a class="eliminar">X</a>
            `;
            parrafo.classList.add("listado");
            return listatweets.appendChild(parrafo);
        });
        eliminarLista();
    }
}

//Limpiar html
function limpiarHTML(){
    while(listatweets.firstChild){
        listatweets.firstChild.remove();
    }
}

//Eventos a los enlaces
function eliminarLista(){
    const eliminar = document.querySelectorAll("a");
    eliminar.forEach( elemento => {
        elemento.addEventListener( "click", () => {
            const borrar = elemento.parentElement.children[0].textContent;
            let valor = listaMensaje.filter( lista => lista.trim() !== borrar.trim());
            localStorage.setItem("ejemplo", JSON.stringify(valor));
            elementosMensajes();
        });
    });
}