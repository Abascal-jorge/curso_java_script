//Variables
const navBar = document.querySelector(".navbar");
const spanLogo = document.querySelector(".logo a span");
const menuoculto = document.querySelector("nav .menu");
const cambiarIcono = document.querySelector(".menu-btn i");
const clickMostrarMenu = document.querySelectorAll(".menu-btn");
const carousel = document.querySelector(".carousel");
const btnArriba = document.querySelector(".scroll-up-btn");

myApp();

function myApp(){
    //console.log("Hola");
    window.addEventListener("scroll", scrollCambios);

    clickMostrarMenu.forEach( accion => {
        accion.addEventListener("click", mostrarMenu);
    });

    btnArriba.addEventListener("click", mandarInicio);
    scrollCambios();
}

//Para cambiar color navbar
function scrollCambios(){


    if( window.scrollY > 20 ){
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }

    if( window.scrollY > 500 ){
        document.querySelector(".scroll-up-btn").classList.add("show");
    }else{
        document.querySelector(".scroll-up-btn").classList.remove("show");
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

// Slide-up script
function mandarInicio(){
    window.scroll(0,0);
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

    
    //Letras cambiantes
    let typed = new Typed(".typing", {
        strings: ["Youtuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    let typed2 = new Typed(".typing2", {
        strings: ["Youtuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


});