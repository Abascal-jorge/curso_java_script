//Variables selectores
const resultado = document.querySelector("#resultado");
const spinnerEtiqueta = document.querySelector(".spinner");
const formulario = document.querySelector("#formulario");
//vconst cargando = document.querySelector(".cargando");
//Variables 
let pokemones = [];
let pokemonesData = [];

myApp();

function myApp(){
    consultarAPI();
    formulario.addEventListener("submit", buscarPokemon);
}


async function buscarPokemon(e){
    e.preventDefault();
    const buscar = document.querySelector("#buscarForm").value;
    if(buscar === ""){
        mostrarAlerta("Ingresa el pokemon que deseas buscar");
        return;
    }
    const pokemonBuscado = await busquedaAPI(buscar.toLowerCase());
    if(pokemonBuscado){
        const objetoInformacion = {
            nombre: pokemonBuscado.name,
            url_imagen : pokemonBuscado.sprites.other.dream_world.front_default,
            id_pokemon : pokemonBuscado.id
        }
        limpiarHTMl();
        mostrarHTML(objetoInformacion);
    }else{
        mostrarAlerta("El pokemon que buscas no existe");
    }
}

//consultar api por pokemon a buscar
async function busquedaAPI(buscar){
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${buscar}`;
        const respuesta = await axios.get(url);
        return respuesta.data;   
    } catch (error) {
        console.log(error);
    }
}

//Busqueda pokemon
//Consultando api
async function consultarAPI() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100`;

    await fetch(url)
        .then( respuesta => respuesta.json() )
        .then( datos => mostrarNombres(datos.results))
}

//Retornando nombres pokemones 
function mostrarNombres(datos){
    datos.forEach( pokemon => {
        pokemones = [...pokemones, pokemon.name];
    });
    obtenerLink(pokemones);
}

//function para consutar y obtener lo slink de las imagenes
function obtenerLink(pokemones){
    pokemones.forEach( async pokemon => {
        informacionPokemones(await busquedaAPI(pokemon));
    });

    spinner();
    setTimeout(() => {
        iterarPokemones(pokemonesData);
    }, 1000);
}

//Obtener datos y llenar array con los pokemones
function informacionPokemones(datos){
    const objetoInformacion = {
        nombre: datos.name,
        url_imagen : datos.sprites.other.dream_world.front_default,
        id_pokemon : datos.id
    }

    pokemonesData.push(objetoInformacion);
}

function iterarPokemones(){
    pokemonesData.forEach( info => {
        mostrarHTML(info);
    });
}

function mostrarHTML(info){
        const card_principal = document.createElement("div");
        card_principal.classList.add("card");

        const informacion = document.createElement("div");
        informacion.classList.add("info-pokemon");

        const img = document.createElement("img");
        const nombre = document.createElement("p");
        const idPokemon = document.createElement("span");

        img.src = info.url_imagen;
        nombre.textContent = info.nombre;
        idPokemon.textContent = `ID = ${info.id_pokemon}`;

        informacion.appendChild(idPokemon);
        informacion.appendChild(nombre);

        card_principal.appendChild(img);
        card_principal.appendChild(informacion);
        resultado.appendChild(card_principal);

        //cargando.style.display = "block";
       
}

//Creando Spinner
function spinner(){
    const spinner = document.createElement("div");
    spinner.classList.add("sk-cube-grid");

    spinner.innerHTML = `
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
    `;

    spinnerEtiqueta.appendChild(spinner);

    setTimeout(() => {
        spinner.remove();
    }, 1000);
}

function limpiarHTMl(){
    while(resultado.firstChild){
        resultado.firstChild.remove();
    }
}

function mostrarAlerta(mensaje){
    if(!document.querySelector(".error")){
        const alerta = document.createElement("p");
        alerta.classList.add("error");
        alerta.textContent = mensaje;
        
        formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}


/*SCROLL INFINITO
const observer = new IntersectionObserver((entries) => {
    if( entries[0].intersectionRatio > 0){
        pokemonesData = [];
        consultarAPI();
    }
});

observer.observe(cargando);*/
