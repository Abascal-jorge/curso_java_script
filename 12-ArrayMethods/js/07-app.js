const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["octubre", "Noviembre", "diciembre"];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


const resultado = meses.concat(meses2, meses3);
const resultado2 = [...meses, ...meses2, ...meses3];

console.log(resultado);
console.log(resultado2);