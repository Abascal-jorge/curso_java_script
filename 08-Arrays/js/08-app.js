const producto = {
    nombre: "Monitor",
    precio: 2400,
    disponible: true
}

//Destructuring
const { nombre } = producto;

console.log(nombre);

//Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

const [ , , tercero, ...cuarto ] = numeros;

console.log(tercero);