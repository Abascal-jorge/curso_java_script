/*Variables selectorrees*/
const menuMovil = document.querySelector("#menu-movil");

/*Variables enlaces menu */
const scrollServices = document.querySelector("#enlace-servicios");
const trabajadoresEnlace = document.querySelector("#enlace-trabajadores");

/*Variables selectores seccion indicadas */
const cardServices = document.querySelector("#services-scroll");
const trabajadores = document.querySelector("#trabajadores-section");

/*Selectores de trabajadores*/
const trabajadorUno = document.querySelector("#uno");
const trabajadorDos = document.querySelector("#dos");
const trabajadorTres = document.querySelector("#tres");

/* Selectores de opciones footer */
const productos = document.querySelector("#productos");

MyApp();

function MyApp(){
    menuMovil.addEventListener("click", mostrarMenu);
    scrollServices.addEventListener("click", scrollMostrar);
    trabajadoresEnlace.addEventListener("click", trabajadoresMostrar);
    /*productos.addEventListener("click", () => {
        if(productos.parentElement.childNodes[3].style.display){
            productos.parentElement.childNodes[3].style.display = "block";
        }else{
            productos.parentElement.childNodes[3].style.display = "none";
        }
    });*/
    //scrollMostrar();
}

function mostrarMenu(){
        const menuHeader = document.querySelector(".menu-header");
        if(menuHeader.classList.contains("menu-responsive")){
            menuHeader.classList.remove("menu-responsive");
        }else{
            menuHeader.classList.add("menu-responsive");
        }
}

function scrollMostrar(e){
    e.preventDefault();
    window.scroll(0, cardServices.getBoundingClientRect().y);
}

function trabajadoresMostrar(e){
    e.preventDefault();
    window.scroll(0, trabajadores.getBoundingClientRect().y);
}

let i = 1;
setInterval(() => {
    if(i === 1){
        trabajadorUno.style.opacity = "1";
        trabajadorDos.style.opacity = "0";
        trabajadorTres.style.opacity = "0";
    }else if(i === 2){
        trabajadorDos.style.opacity = "1";
        trabajadorUno.style.opacity = "0";
        trabajadorTres.style.opacity = "0";
    }else{
        trabajadorTres.style.opacity = "1";
        trabajadorUno.style.opacity = "0";
        trabajadorDos.style.opacity = "0";
        i = 0;
    }
    i++;
}, 10000);
