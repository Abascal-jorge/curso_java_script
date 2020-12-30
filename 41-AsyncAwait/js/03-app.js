

const consultarAPI = async () => {
    const url = `https://picsum.photos/list`;

    const resultado = await fetch(url);
    const datos = await resultado.json();
    
    mostrarHTML(datos);
    cambiarColorH2();
};

function mostrarHTML(datos){
    const resultado = document.querySelector(".resultado");
    
    datos.forEach(respuesta => {
        const {author, author_url} = respuesta;
        const createCard = document.createElement("div");
        createCard.classList.add("card");
        createCard.innerHTML = `
            <h2>${author}</h2>
            <a href="${author_url}">Imagen URL</a>
        `; 
        resultado.appendChild(createCard);
    });
}

function cambiarColorH2(){
 const titulo = document.querySelector(".contenido h1");
 titulo.textContent = "Finalizado consulta";
 titulo.style.color = "red";
}

document.addEventListener("DOMContentLoaded", consultarAPI);