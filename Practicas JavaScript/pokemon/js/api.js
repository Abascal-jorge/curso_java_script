




const consultarAPI = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100`;

    await fetch(url)
        .then( respuesta => respuesta.json() )
        .then( datos => mostrarNombres(datos.results))
}

function mostrarNombres(datos){
    let pokemones = [];
    datos.forEach( pokemon => {
        pokemones = [...pokemones, pokemon.name];
    });
    console.log(pokemones);
}

consultarAPI();