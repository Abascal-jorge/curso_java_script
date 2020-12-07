function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);

console.log( resultado );

//Ejemplo mas avanzado 

calcularImpuesto( agregarCarrito(300) );

function agregarCarrito(precio) {
    return precio;
}

function calcularImpuesto(total){
    console.log( (total * 0.16 ) + total );
}