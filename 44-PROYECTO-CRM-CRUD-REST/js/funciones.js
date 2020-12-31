

//Mostrar Alerta blur o campos vacios
export function mostrarAlerta(mensaje){
    if(!document.querySelector(".error")){
        const alerta = document.createElement("div");
        alerta.classList.add("error");
        alerta.innerHTML = `
            <p>${mensaje}</p>
        `;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}


