/*Variables selectorrees*/
const menuMovil = document.querySelector("#menu-movil");
const scrollServices = document.querySelector("#enlace-servicios");
const cardServices = document.querySelector("#services-scroll");

MyApp();

function MyApp(){
    menuMovil.addEventListener("click", mostrarMenu);
    scrollServices.addEventListener("click", scrollMostrar);
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
    window.scroll(0, 998);
    /*et observer = new IntersectionObserver(entries => {
        console.log(entries[0]);
    });
    
    observer.observe(cardServices);*/
}