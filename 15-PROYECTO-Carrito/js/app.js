//Codigo empleado por mi propio
const agregarCarrito = document.querySelectorAll(".agregar-carrito");
const cuerpo = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
let carritoElementos = [];


//Agregando objeto al arra, creando funcion a todos los botones de agregar al carrito
agregarCarrito.forEach( carrito => {
    carrito.addEventListener("click", e => {
        e.preventDefault();
        //Creando objeto para agregar al array carrito
        const objetoCarrito = {
            curso:carrito.parentElement.children[0].textContent, //0
            profesor: carrito.parentElement.children[1].textContent, // 1
            imagen: carrito.parentElement.parentElement.children[0].src, // 2
            precio: carrito.parentElement.children[3].textContent.split(" ")[2], // 3
            cantidad: 1}; // ninguno
        //Verificando si elemento a agregar ya existe en el array para no agregarlo dos veces 
        let existe = carritoElementos.some(variable => variable.curso === objetoCarrito.curso);
        
        if(existe){
            carritoElementos.forEach(cantidad => {
                if(cantidad.curso === objetoCarrito.curso){
                    cantidad.cantidad += 1;
                }
            });
        }else{
            carritoElementos.push(objetoCarrito);
        }
        agregarElementos(carritoElementos);
        //console.log(carritoElementos);
    });
});


//Crear codigo html para agregar al carrito de compras 
function agregarElementos(elementos){
    const objetoTabla = document.querySelectorAll("#lista-carrito tbody tr");
    objetoTabla.forEach( variable => {
        variable.remove();
    });

    elementos.map( variable => {
        const rowTable = document.createElement("tr");
        const imagen = document.createElement("img");
        const nombre = document.createElement("td");
        const precio = document.createElement("td");
        const cantidad = document.createElement("td");
        const tdCerrar = document.createElement("td");
        const eliminar = document.createElement("a");

        imagen.src = variable.imagen;
        nombre.textContent = variable.curso;
        precio.textContent = variable.precio;
        cantidad.textContent = variable.cantidad;
        eliminar.textContent = "X";
        eliminar.classList.add("borrar-curso");
        //Funcion eliminar producto one for one 
        eliminar.onclick = (e) => {
            e.stopPropagation();
            //console.log(nombre.textContent);
            if(variable.cantidad === 1){
                const nuevo = carritoElementos.filter( eliminarObjeto => eliminarObjeto.curso !== variable.curso);
                carritoElementos = [...nuevo];
                agregarElementos(carritoElementos);
            }else{
                const nuevo = carritoElementos.map( productoBorrar => {
                    if(productoBorrar.cantidad > 1 && productoBorrar.curso === variable.curso){
                        productoBorrar.cantidad --;
                        console.log(productoBorrar.cantidad);
                        return productoBorrar;    
                    }
                    return productoBorrar;
                });
                carritoElementos = [...nuevo];
                agregarElementos(carritoElementos);
            }
        }

        tdCerrar.appendChild(eliminar);
        rowTable.appendChild(imagen);
        rowTable.appendChild(nombre);
        rowTable.appendChild(precio);
        rowTable.appendChild(cantidad);
        rowTable.appendChild(tdCerrar);
        cuerpo.appendChild(rowTable);
    });
}

//Vaciar Array de carritos para limpiar el registro 
vaciarCarrito.addEventListener("click", () => {
    carritoElementos = [];
    agregarElementos(carritoElementos);
    //console.log(carritoElementos);
});



