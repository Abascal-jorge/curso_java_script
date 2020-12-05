const  numeros = [10, 20, 300, 500, [10, 20, 30]];


console.log(numeros);
console.table(numeros);

console.log(numeros[4][2]);
console.log(numeros[0]);


/*const multi = (a, b) => {
    let resultado = 0;
    const estado = Math.abs(b) == b;
    for(i=0; i < Math.abs(b); i++){
        resultado = estado ? resultado + a : resultado - a;
    }
    return resultado;
}

console.log( multi(-10, -50) );*/