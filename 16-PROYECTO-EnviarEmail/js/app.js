//variables 
const btnEnviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const asunto  = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector("#enviar-mail");
const resetBtn = document.querySelector("#resetBtn");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListener();

function eventListener(){
    //Evento la pagina web
    document.addEventListener("DOMContentLoade", iniciarApp);

    //Boton submit
    email.addEventListener("blur", revisarCampos);
    asunto.addEventListener("blur", revisarCampos);
    mensaje.addEventListener("blur", revisarCampos);

    //Reinicia el formulario 
    resetBtn.addEventListener("click", resetearFormulario);

    //Evento boton submit
    formulario.addEventListener("submit", enviarCorreo);

}

//Funciones

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed");
}

function revisarCampos(e){
     
    if(e.target.value.length > 0){ 
        //console.log("Si hay algo");
        const errores = document.querySelector("p.error");
        if(errores){
            errores.remove();
        }
        e.target.classList.add("border", "border-green-500");
        e.target.classList.remove("border-red-500");
    }else{
        e.target.classList.add("border", "border-red-500");
        e.target.classList.remove("border-green-500");
        mostrarError("Todos los campos son obligatorios");
    }


    if(e.target.type === "email"){
        if( er.test( e.target.value ) ){
            const errores = document.querySelector("p.error");
            if(errores){
                errores.remove();
            }
            e.target.classList.add("border", "border-green-500");
            e.target.classList.remove("border-red-500");
        }else{
            e.target.classList.add("border", "border-red-500");
            e.target.classList.remove("border-green-500");
            mostrarError("El correo no es valido");
        }
    }

    //Verificando si pasa validacion
    if( er.test( email.value ) && asunto.value !== ""  && mensaje.value !== ""){
        btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
    }
}

function mostrarError(mensaje){
    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add("border", "border-red-500", "background-red-100", "text-red-500", "p-3", "mt-5", "text-center", "error");

    const errores = document.querySelectorAll(".error");
    
    if( errores.length === 0 ){
        formulario.appendChild(error);
    }
}

//Envia el email 
function enviarCorreo(e){
    e.preventDefault();
    console.log("hola mundo");
    const spinner = document.querySelector("#spinner");
    const parrafo = document.createElement("p");
    parrafo.textContent = "Se envio correctamente";
    parrafo.classList.add("text-center", "my-10", "p-2", "bg-green-500", "text-white", "font-bold", "uppercase");
    spinner.style.display = "flex";

    setTimeout(() => {
        spinner.style.display = "none";
        //Inserta el parrafo antes del parrafo
        formulario.insertBefore(parrafo, spinner);
        
        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();
        }, 5000);
    }, 3000);
   
}


//Limpiar formulario
function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}