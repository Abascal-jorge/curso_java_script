const carrito = [
    { nombre: "Television" , precio: 1400 },
    { nombre: "laptop" , precio: 1100 },
    { nombre: "Audifonos" , precio: 1200 },
    { nombre: "Camara" , precio: 1300 }
];

carrito.forEach( carrito => console.log(`${carrito.nombre} con precio ${carrito.precio}`));

const nuevoArreglo2 = carrito.map( carrito => carrito.nombre);

console.log(nuevoArreglo2);
