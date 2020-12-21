function iterador( articulos ){

    let i=0;



    return{
        iterando: () =>{
            let fin = i >= articulos.length;
            let inicio = !fin ? articulos[i++] : undefined;

            console.log(inicio);
        }
    }

}

const articulos = ["Camisa", "Playera", "Short", "Pantalon"];

const iteradorJorge = iterador(articulos);

iteradorJorge.iterando();
iteradorJorge.iterando();
iteradorJorge.iterando();
iteradorJorge.iterando();


var reverse = function(x) {

    const estado = x <= -1 ? true : false

    let b = x.toString();
    //console.log(b);

    if(x === 0 ){
        return x;
    }

    let salida;

    if(estado){
        salida = "-";
    }

    
    for( let i = (b.length -1 ); i > 0; i--){
        salida = salida + i;
    }
    console.log(salida);
    return   parseInt(salida);
    
};

console.log(reverse(123));