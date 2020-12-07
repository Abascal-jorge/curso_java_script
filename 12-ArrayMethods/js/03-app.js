const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Decir al usuario cuanto cuestan los productos con forech
let total=0;
carrito.forEach( carro => {
    total += carro.precio;
});

console.log(total);

const ejemplo = carrito.reduce( (total, producto) => {
    return total + producto.precio;
}, 0);

console.log(`${ejemplo} el total`);

//Devolver numero mayor

/*const numeros = [10, 15, 40, 60, 25, 80, 1000, 200, 505];

const resultado = numeros.reduce( (mayor, numero) => mayor > numero ? mayor : numero);

console.log(resultado);*/

/*const valores = [undefined, null, false, 10, 20, 30, 40 , 50 ,60, 0];

const eliminar = (array) => (
    array.reduce( (acc, valor) =>{
        if(valor){
            acc = [...acc, valor];
        }
        return acc;
    }, [])
);


const nuevo = eliminar( valores );

console.log(nuevo);*/