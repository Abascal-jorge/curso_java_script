//Variables
const navBar = document.querySelector(".navbar");
const spanLogo = document.querySelector(".logo a span");
const menuoculto = document.querySelector("nav .menu");
const cambiarIcono = document.querySelector(".menu-btn i");
const clickMostrarMenu = document.querySelector(".menu-btn");

myApp();

function myApp(){
    //console.log("Hola");
    window.addEventListener("scroll", scrollCambios);
    clickMostrarMenu.addEventListener("click", mostrarMenu);
    scrollCambios();
}

//Para cambiar color navbar
function scrollCambios(){
    if( window.scrollY > 20 ){
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }
}

//Menu movil cambios en las clases
function mostrarMenu(){
    if(!menuoculto.classList.contains("active")){
        menuoculto.classList.add("active");
        cambiarIcono.classList.add("active");
    }else{
        menuoculto.classList.remove("active");
        cambiarIcono.classList.remove("active");
    }
}

