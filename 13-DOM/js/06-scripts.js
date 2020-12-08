const titulo = document.querySelector(".contenido-hero h1");
titulo.innerHTML = "hola mundo todos estamos felices seguimos unidos";


const imagen = document.querySelectorAll(".card img");
console.log(imagen);
imagen.forEach(element => {
    element.src = "img/arriba.jpg";
});