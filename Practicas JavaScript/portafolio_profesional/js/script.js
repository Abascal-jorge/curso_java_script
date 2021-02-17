//Variables
const navBar = document.querySelector(".navbar");
const spanLogo = document.querySelector(".logo a span");
const menuoculto = document.querySelector("nav .menu");
const cambiarIcono = document.querySelector(".menu-btn i");
const clickMostrarMenu = document.querySelector(".menu-btn");
const carousel = document.querySelector(".carousel");

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

//galearia teams

$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});