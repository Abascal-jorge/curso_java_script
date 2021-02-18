/*Variables selectorrees*/
const menuMovil = document.querySelector("#menu-movil");
const header = document.querySelector(".header");

/*Variables enlaces menu */
const scrollServices = document.querySelector("#enlace-servicios");
const trabajadoresEnlace = document.querySelector("#enlace-trabajadores");
const contactanosEnlace = document.querySelector("#enlace-contactanos");
const buttonContactanos = document.querySelector("#contactanos-button");

/*Variables selectores seccion indicadas */
const cardServices = document.querySelector("#services-scroll");
const trabajadores = document.querySelector("#trabajadores-section");
const contactanos = document.querySelector("#seccion-contactanos");

/*Selectores de trabajadores*/
const trabajadorUno = document.querySelector("#uno");
const trabajadorDos = document.querySelector("#dos");
const trabajadorTres = document.querySelector("#tres");

/* Selectores de opciones footer */
const productos = document.querySelector("#productos");

/*variable formulario */
const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const telefonoInput = document.querySelector("#telefono");
const correoInput = document.querySelector("#correo");

//Variables datos objeto
const datos = {
    nombre: "",
    apellido: "",
    telefono: "",
    correo: ""
};

MyApp();

function MyApp(){
    formulario.addEventListener("submit", submitContacto);
    menuMovil.addEventListener("click", mostrarMenu);
    scrollServices.addEventListener("click", scrollMostrar);
    trabajadoresEnlace.addEventListener("click", trabajadoresMostrar);
    contactanosEnlace.addEventListener("click", contactanosMostrar);
    buttonContactanos.addEventListener("click", contactanosMostrar);
    /*Evento en los input*/
    nombreInput.addEventListener("input", obtenerDatos);
    apellidoInput.addEventListener("input", obtenerDatos);
    telefonoInput.addEventListener("input", obtenerDatos);
    correoInput.addEventListener("input", obtenerDatos);
}

function mostrarMenu(){
        const menuHeader = document.querySelector(".menu-header");
        if(menuHeader.classList.contains("menu-responsive")){
            menuHeader.classList.remove("menu-responsive");
            header.classList.remove("header-menu");
        }else{
            menuHeader.classList.add("menu-responsive");
            header.classList.add("header-menu");
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

function contactanosMostrar(e){
    e.preventDefault();
    window.scroll(0, contactanos.getBoundingClientRect().y);
}

/*Codigo para pasar las imagenes trabajadores */
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

mostrarDetails();
mostrarAnimacione();
/*mostrar open abiertos*/
function mostrarDetails(){
    const detalles = document.querySelectorAll("details");
    if(screen.width >= 768){
        detalles.forEach( deta => {
            deta.open = true;
        });
    }else{
        detalles.forEach( deta => {
            deta.open = false;
        });
    }
}



/*Codigo animaciones con gulp */
function mostrarAnimacione(){
    gsap.to(".card3", {duration: 0, x:3000});
    gsap.to(".card3",{ duration: 2.5, rotation: 360, x:0});

    gsap.to(".card2", {duration: 0, y:3000});
    gsap.to(".card2",{ duration: 2, rotation: 360, y:0});

    gsap.to(".card1", {duration: 0, x:-3000});
    gsap.to(".card1",{ duration: 1.5, rotation: 360, x:0});

    gsap.to(".card4", {duration: 0, y:-3000});
    gsap.to(".card4",{ duration: 3, rotation: 360, y:0});
}

/*Validar formulario contacto */
function submitContacto(e){
    e.preventDefault();
    //const { nombre, apellido, telefono, correo} = datos;
  
    if(!Object.values(datos).every(dato => dato != "")){
        mostrarAlerta("todos los campos son obligatorios", "error");
        return;
    }
    
    mostrarAlerta("Tenemos tus datos pronto nos contactaremos contigo", "complete");
    reiniciarDatos();
    formulario.reset();
}

function obtenerDatos(e){
    datos[e.target.name] = e.target.value;
}

function mostrarAlerta(mensaje, tipo){

    if(!document.querySelector(".error")){
        const alerta = document.createElement("p");

        if(tipo === "error"){
            alerta.classList.add("error");
        }else{
            alerta.classList.add("complete");
        }

        alerta.textContent = mensaje;

        const contactanos = document.querySelector(".contactanos");

        contactanos.insertBefore(alerta, document.querySelector(".contactanos .flex-formulario"));

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function reiniciarDatos(){
    datos.nombre = "";
    datos.apellido = "";
    datos.telefono = "";
    datos.correo = "";
}

/*const menuMovil = document.querySelector(".menu-btn");
const navOculta = document.querySelector(".ul-nav");
const cambiarIcono = document.querySelector(".menu-btn i");

myApp();

function myApp(){
    menuMovil.addEventListener("click", mostrarMenu);
    window.addEventListener("scroll", cambiarNav);
}

function mostrarMenu(){
    if( !navOculta.classList.contains("active") ){
        navOculta.classList.add("active");
        cambiarIcono.classList.add("active");
    }else{
        navOculta.classList.remove("active");
        cambiarIcono.classList.remove("active");
    }
}

function cambiarNav(){
    if( window.scrollY > 20){
        document.querySelector(".navegacion").classList.add("sticky");
        navOculta.classList.add("color");
    }else{
        document.querySelector(".navegacion").classList.remove("sticky");
        navOculta.classList.remove("color");
    }
}*/















































/*
//Variables selectorrees
const menuMovil = document.querySelector("#menu-movil");
const header = document.querySelector(".header");

//Variables enlaces menu 
const scrollServices = document.querySelector("#enlace-servicios");
const trabajadoresEnlace = document.querySelector("#enlace-trabajadores");
const contactanosEnlace = document.querySelector("#enlace-contactanos");
const buttonContactanos = document.querySelector("#contactanos-button");

//Variables selectores seccion indicadas 
const cardServices = document.querySelector("#services-scroll");
const trabajadores = document.querySelector("#trabajadores-section");
const contactanos = document.querySelector("#seccion-contactanos");

//Selectores de trabajadores
const trabajadorUno = document.querySelector("#uno");
const trabajadorDos = document.querySelector("#dos");
const trabajadorTres = document.querySelector("#tres");

// Selectores de opciones footer
const productos = document.querySelector("#productos");

//variable formulario 
const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const telefonoInput = document.querySelector("#telefono");
const correoInput = document.querySelector("#correo");

//Variables datos objeto
const datos = {
    nombre: "",
    apellido: "",
    telefono: "",
    correo: ""
};

MyApp();

function MyApp(){
    formulario.addEventListener("submit", submitContacto);
    menuMovil.addEventListener("click", mostrarMenu);
    scrollServices.addEventListener("click", scrollMostrar);
    trabajadoresEnlace.addEventListener("click", trabajadoresMostrar);
    contactanosEnlace.addEventListener("click", contactanosMostrar);
    buttonContactanos.addEventListener("click", contactanosMostrar);
    //Evento en los input
    nombreInput.addEventListener("input", obtenerDatos);
    apellidoInput.addEventListener("input", obtenerDatos);
    telefonoInput.addEventListener("input", obtenerDatos);
    correoInput.addEventListener("input", obtenerDatos);
}

function mostrarMenu(){
        const menuHeader = document.querySelector("nav");
        if(!menuHeader.classList.contains("menu-responsive")){
            menuHeader.classList.add("menu-responsive");
            setTimeout(() => {
                menuHeader.classList.remove("menu-responsive");
            }, 2000);
        }

        
        //if(menuHeader.classList.contains("menu-responsive")){
        //    menuHeader.classList.remove("menu-responsive");
        //}else{
        //    menuHeader.classList.add("menu-responsive");
        //}
}

function scrollMostrar(e){
    e.preventDefault();
    window.scroll(0, cardServices.getBoundingClientRect().y);
}

function trabajadoresMostrar(e){
    e.preventDefault();
    window.scroll(0, trabajadores.getBoundingClientRect().y);
}

function contactanosMostrar(e){
    e.preventDefault();
    window.scroll(0, contactanos.getBoundingClientRect().y);
}

//Codigo para pasar las imagenes trabajadores 
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

mostrarDetails();
mostrarAnimacione();
//mostrar open abiertos
function mostrarDetails(){
    const detalles = document.querySelectorAll("details");
    if(screen.width >= 768){
        detalles.forEach( deta => {
            deta.open = true;
        });
    }else{
        detalles.forEach( deta => {
            deta.open = false;
        });
    }
}



//Codigo animaciones con gulp 
function mostrarAnimacione(){
    gsap.to(".card3", {duration: 0, x:3000});
    gsap.to(".card3",{ duration: 2.5, rotation: 360, x:0});

    gsap.to(".card2", {duration: 0, y:3000});
    gsap.to(".card2",{ duration: 2, rotation: 360, y:0});

    gsap.to(".card1", {duration: 0, x:-3000});
    gsap.to(".card1",{ duration: 1.5, rotation: 360, x:0});

    gsap.to(".card4", {duration: 0, y:-3000});
    gsap.to(".card4",{ duration: 3, rotation: 360, y:0});
}

//Validar formulario contacto 
function submitContacto(e){
    e.preventDefault();
    //const { nombre, apellido, telefono, correo} = datos;
  
    if(!Object.values(datos).every(dato => dato != "")){
        mostrarAlerta("todos los campos son obligatorios", "error");
        return;
    }
    
    mostrarAlerta("Tenemos tus datos pronto nos contactaremos contigo", "complete");
    reiniciarDatos();
    formulario.reset();
}

function obtenerDatos(e){
    datos[e.target.name] = e.target.value;
}

function mostrarAlerta(mensaje, tipo){

    if(!document.querySelector(".error")){
        const alerta = document.createElement("p");

        if(tipo === "error"){
            alerta.classList.add("error");
        }else{
            alerta.classList.add("complete");
        }

        alerta.textContent = mensaje;

        const contactanos = document.querySelector(".contactanos");

        contactanos.insertBefore(alerta, document.querySelector(".contactanos .flex-formulario"));

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function reiniciarDatos(){
    datos.nombre = "";
    datos.apellido = "";
    datos.telefono = "";
    datos.correo = "";
}*/