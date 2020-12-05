const carrito = [];

const producto = {
    nombre: "Celular",
    precio: 1200
}

const producto2 = {
    nombre: "Monitor",
    precio: 4000
}

const producto3 = {
    nombre: "laptop",
    precio: 4000
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

//Elimin ultimo elemento del array
//carrito.pop();

//Eliminar al inicio del array
//carrito.shift();

carrito.splice(0, 1);

console.table(carrito);