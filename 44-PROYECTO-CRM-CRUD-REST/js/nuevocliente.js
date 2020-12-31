import { mostrarAlerta } from "./funciones.js";
import { consultaAPI } from "./API.js";

(function(){
    //Declaracion de variables de selectores
    const formulario = document.querySelector("#formulario");
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const telefonoInput = document.querySelector("#telefono");
    const empresaInput = document.querySelector("#empresa");

    //Creando objeto de los datos clientes
    const datosCliente = {
        nombre: "",
        telefono: "",
        email: "",
        empresa: ""
    }

    //funcion MyApp que llama los eventos 
    MyApp();

    function MyApp(){
        document.addEventListener("DOMContentLoaded", () => {
            formulario.addEventListener("submit", onSubmitCliente);
        });
        nombreInput.addEventListener("input", llenarDatosClientes);
        emailInput.addEventListener("input", llenarDatosClientes);
        telefonoInput.addEventListener("input", llenarDatosClientes);
        empresaInput.addEventListener("input", llenarDatosClientes);
    }

    //LLenar objeto datoscliente con el evento de los input
    function llenarDatosClientes(e){
        datosCliente[e.target.name] = e.target.value;
    }

    //Evento submit agregar cliente
    function onSubmitCliente(e){
        e.preventDefault();
        
        if( !Object.values(datosCliente).every( input => input !== "") ){
            mostrarAlerta("Todos los campos son obligatorios");
            return;
        }

        consultaAPI(datosCliente);
    }

})();