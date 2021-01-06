const mostrar = document.querySelector("#mostrar-menu");
const menu_nav = document.querySelector(".ul-menu");

mostrar.addEventListener("click", () => {

    if(menu_nav.classList.contains("mostrar_menu")){
        menu_nav.classList.remove("mostrar_menu");
    }else{
        menu_nav.classList.add("mostrar_menu");
    }

});