const carrito = new Set();

carrito.add("Camisa");
carrito.add("Pantalon");
carrito.add("Short");

console.log( carrito.has("Camisa") );

console.log( carrito.size );

carrito.delete("Short");

carrito.forEach( carro => console.log(carro));

carrito.clear();

console.log(carrito);


//dado un array con valores repetidos crear uno nuevo sin estos
const arrayNum = [20,20,10,10,30,30,40,50,60,70,80,80,80];

const numeros = new Set(arrayNum);

console.log( numeros );