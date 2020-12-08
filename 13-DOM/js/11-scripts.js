const clases = document.querySelector(".btn-flotante");
const footer = document.querySelector("#footer");
const  titulo = document.querySelector(".contenido-hero h1");




clases.onclick = () => {
    if (clases.classList.contains("activo")) {
        clases.classList.remove("activo");
        clases.textContent = "Idioma y Moneda";
        footer.style.bottom = "-100%";
        titulo.textContent = "Encuentra hospedaje para tus próximas vacaciones"
    }else{
        clases.classList.add("activo");
        clases.textContent = "Cerrar";
        footer.style.bottom = "0";
        titulo.textContent = "Abascal";
    }
};

console.log(clases);

//Footer class lo esconde