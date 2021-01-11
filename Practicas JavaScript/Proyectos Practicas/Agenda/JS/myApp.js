//Variables de selectores
const nombreInput = document.querySelector("#nombre");
const telefonoInput = document.querySelector("#telefono");
const direccionInput = document.querySelector("#direccion");
const empresaInput = document.querySelector("#empresa");
const estadoInput = document.querySelector("#estado");
const formulario = document.querySelector("#form-contacto");

//Variables Globales objeto y array
let contactos;
const datos = {
    nombre: "",
    telefono: "",
    direccion: "",
    empresa: "",
    estado: ""
}

InitApp();
function InitApp(){
    document.addEventListener("DOMContentLoaded", () => {
        contactos = JSON.parse( localStorage.getItem("usuarios")) ? JSON.parse( localStorage.getItem("usuarios")) : [];
    });
    nombreInput.addEventListener("input", llenandoDatos);
    telefonoInput.addEventListener("input", llenandoDatos);
    direccionInput.addEventListener("input", llenandoDatos);
    empresaInput.addEventListener("input", llenandoDatos);
    estadoInput.addEventListener("input", llenandoDatos);

    formulario.addEventListener("submit", onSubmitForm);
}

function llenandoDatos(e){
    datos[e.target.name] = e.target.value;
}

function onSubmitForm(e){
    e.preventDefault();
    datos.id = Date.now();
    const { nombre, telefono, direccion, empresa, estado } = datos;

    if( nombre === "" || telefono === "" || direccion === "" || empresa === "" || estado === ""){
        console.log("Todos los datos son obligatorios");
        return;
    }

    contactos = [...contactos, datos];
    console.log(contactos);
}
