const contenido = document.querySelector("#mensajes");
const resultado = document.querySelector("#resultado");


//Mostrar Alerta 
export function  mostrarAlerta(mensaje, tipo){   
    const alerta = document.createElement("div");
    
    alerta.innerHTML = `
        <p>${mensaje}</p>
    `;

    if(tipo === "error"){
        alerta.classList.add("error");
    }

    contenido.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

export function mostrarLetra(datos){
    limpiarHtml();
    const letraMusica = document.createElement("p");
    letraMusica.textContent = datos.lyrics;
    resultado.appendChild(letraMusica);
}

function limpiarHtml(){
    while(resultado.firstChild){
        resultado.firstChild.remove();
    }
}