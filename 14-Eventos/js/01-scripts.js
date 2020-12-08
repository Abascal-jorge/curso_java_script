const busqueda = document.querySelector(".busqueda");

let texto = "";

busqueda.addEventListener("input", (e) => {
    texto = e.target.value;
});

/*const contenidoHero = document.querySelector(".contenido-hero");
const error = document.createElement("p");
error.textContent  = "Formulario vacio";

busqueda.addEventListener("blur", () => {
    if (texto.trim() === "") {
        contenidoHero.appendChild(error);
    }else{
        error.textContent("");
    }
});*/