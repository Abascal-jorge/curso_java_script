const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, index) => {
    if( mes === "Abril"){
        console.log(`Se encuentra en la posicion ${index}`);
    }
});

//Enconctrar el indice de abril 
const indice = meses.findIndex( mes =>  mes === "Abril");

const objeto = carrito.findIndex( carro => carro.precio === 400);

console.log(objeto);
console.log(indice);