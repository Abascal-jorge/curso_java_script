import { obtenerCliente, editarCliente } from "./API.js"
import { mostrarAlerta } from "./funciones.js";

 (function(){

    //Variables selector
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const telefonoInput = document.querySelector("#telefono");
    const empresaInput = document.querySelector("#empresa");
    const idInput = document.querySelector("#id");

     document.addEventListener("DOMContentLoaded", async () => {
         const parametrosURL = new URLSearchParams(window.location.search);
         const idCliente = parseInt( parametrosURL.get("id") );

         const editarCliente = await obtenerCliente(idCliente);
         mostrarDatos(editarCliente);

         const formulario = document.querySelector("#formulario");
         formulario.addEventListener("submit", onSubmitEditar);
     });


     function mostrarDatos(cliente){
         const { nombre, telefono, email, empresa, id } = cliente;
         nombreInput.value = nombre;
         telefonoInput.value = telefono;
         emailInput.value = email;
         empresaInput.value = empresa;
         idInput.value = id;
     }

     function onSubmitEditar(e){
        e.preventDefault();

        const datosClientes = {
            nombre: nombreInput.value,
            telefono: telefonoInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        if(!Object.values(datosClientes).every(input => input !== "")){
            mostrarAlerta("Todos los campos son obligatorios");
            return;
        }

        editarCliente(datosClientes);

     }
 })();