const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Celular', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado = "";

carrito.forEach( producto => producto.nombre === "Celular" ? resultado = producto : "");

console.log(resultado);

let resultado2 = carrito.find( producto => producto.nombre === "Celular");

console.log(resultado2);
    