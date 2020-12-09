const contenedor = document.querySelector(".contenedor-cards.premium");

window.addEventListener( "scroll", () =>{
    let valor = contenedor.getBoundingClientRect();
    if(valor.bottom === 1000.203125){
        contenedor.innerHTML = "Hola a todos pinches perros";
    }   
    console.log(valor);
});