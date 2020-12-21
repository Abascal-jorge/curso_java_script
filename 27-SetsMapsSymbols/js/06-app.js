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
