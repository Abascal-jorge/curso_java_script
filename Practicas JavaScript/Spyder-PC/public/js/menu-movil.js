/*Variables selectorrees*/
const menuMovil = document.querySelector("#menu-movil");

MyApp();

function MyApp(){
    menuMovil.addEventListener("click", mostrarMenu);
}

function mostrarMenu(){
        const menuHeader = document.querySelector(".menu-header");
        if(menuHeader.classList.contains("menu-responsive")){
            menuHeader.classList.remove("menu-responsive");
        }else{
            menuHeader.classList.add("menu-responsive");
        }
}