const cargarAPI = document.querySelector("#cargarAPI");
const listadoMusica = document.querySelector(".listado-musica");

cargarAPI.addEventListener("click", consultarAPI);


function consultarAPI(){

    const url = `https://picsum.photos/list`;

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML(resultado) );

}


function mostrarHTML(resultado){

    resultado.forEach( respuesta => {
        console.log(respuesta.post_url);
        const { author, post_url} = respuesta;
        const divContenido = document.createElement("div");
        divContenido.innerHTML = `
            <img href="${post_url}" alt="Imagen_autor">
            <p>${author}</p>
        `;
        listadoMusica.appendChild(divContenido);
    });
}