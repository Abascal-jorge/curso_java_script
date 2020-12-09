const agregarCarrito = document.querySelectorAll(".agregar-carrito");


/*agregarCarrito.map( carrito => {
    carrito.addEventListener("click", e => {
        e.preventDefault();
        alert("Hola funciona");
    });
});*/
const carritoElementos = [];

agregarCarrito.forEach( carrito => {
    carrito.addEventListener("click", e => {
        e.preventDefault();
        const objetoCarrito = {
            curso:carrito.parentElement.children[0].textContent, //0
            profesor: carrito.parentElement.children[1].textContent, // 1
            imagen: carrito.parentElement.children[2].textContent, // 2
            precio: carrito.parentElement.children[3].textContent, // 3
            cantidad: 0}; // ninguno
        let existe =carritoElementos.some(variable => variable.curso === objetoCarrito.curso);
        if(existe){
            carritoElementos.forEach(cantidad => {
                if(cantidad.curso === objetoCarrito.curso){
                    cantidad.cantidad += 1;
                }
            });
        }else{
            carritoElementos.push(objetoCarrito);
        }
        console.log(carritoElementos);
    });
});