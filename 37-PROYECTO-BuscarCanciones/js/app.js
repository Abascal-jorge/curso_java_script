//Variable Selectores
const artistaInput = document.querySelector("#artista");
const cancionInput = document.querySelector("#cancion");
const formulario = document.querySelector("#formulario-buscar");

//Importando 
import { mostrarAlerta } from "./interfaz.js";
import { consultarAPI } from "./api.js";


myApp();

//Objeto para guardar los datos ingresados por el usuario
const datosCancion = {
    artista: "",
    cancion: ""
}


// Funciones documentos
function myApp(){
    formulario.addEventListener("submit", submitCancion);
    artistaInput.addEventListener("input", llenarCampos);
    cancionInput.addEventListener("input", llenarCampos);
}


//Obteniendo datos de los input
function llenarCampos(e){
    datosCancion[e.target.name] = e.target.value;
}


//Funcion boton enviar
function submitCancion(e){
    e.preventDefault();
    
    //Validar campos
    const { artista, cancion } = datosCancion;

    if( artista === "" || cancion === ""){
        mostrarAlerta("Todos los campos son obligatorios", "error");
        return;
    }
    
    consultarAPI(artista, cancion);
}