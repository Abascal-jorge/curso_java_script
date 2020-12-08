/*const enlace = document.createElement("A");

enlace.href = "http://facebook.com";
enlace.textContent = "Facebook";
enlace.onclick = () => {
    alert("Hola a todos mundo");
}
enlace.classList.add("Nueva-clase");

//Seleccionando el contenedor donde agregaremos el enlace creado
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(enlace);

console.log(navegacion);  */

const div = document.createElement("div");
const img = document.createElement("img");
const divInterno = document.createElement("div");
const categoria = document.createElement("p");
const titulo = document.createElement("p");
const precio = document.createElement("p");

//Agregandole clase al div principal
div.classList.add("card");
//Agregando imagen al img
img.src = "img/populares1.jpg";
//Agregando clases al divinterno y asus parrafos
divInterno.classList.add("info");
categoria.classList.add("categoria", "concierto");
titulo.classList.add("titulo");
precio.classList.add("precio");

//Agregando texto a los componentes
categoria.textContent = "Concierto";
titulo.textContent = "Musica electronico 2022";
precio.textContent = "$1200 por persona";

//Agregando los elementos div y img al div principal
div.appendChild(img);
div.appendChild(divInterno);

//Agregando los parrafos al div interno
divInterno.appendChild(categoria);
divInterno.appendChild(titulo);
divInterno.appendChild(precio);

//Agregando el cards creado al html en el contenedor indicado
const conetenedorcards = document.querySelector(".hacer .contenedor-cards");
conetenedorcards.appendChild(div);