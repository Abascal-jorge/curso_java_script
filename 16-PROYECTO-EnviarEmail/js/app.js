//variables 
const btnEnviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const asunto  = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListener();

function eventListener(){
    document.addEventListener("DOMContentLoade", iniciarApp);
    email.addEventListener("blur", revisarCampos);
}

//Funciones

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed");
}

function revisarCampos(e){
    if(e.target.value === ""){
        const error = document.createElement("p");
        error.textContent = "Debes llenar el campo";
        error.classList.add("border", "border-red-500");
        email.parentElement.appendChild(error);
    }
}