function iteradorNuevo(productos){

    let i=0;

    return{
        iteradorResultado: () => {
            let fin = productos.length === i;
            let inicio =  fin ? undefined : productos[i++] ;

            return{
                fin,
                inicio
            }
        }
    }
    
}

const productos = ["Producto 1", "Producto 2", "Producto 3"];

const iterador = iteradorNuevo(productos);

console.log( iterador.iteradorResultado() );
console.log( iterador.iteradorResultado() );
console.log( iterador.iteradorResultado() );
console.log( iterador.iteradorResultado() );


