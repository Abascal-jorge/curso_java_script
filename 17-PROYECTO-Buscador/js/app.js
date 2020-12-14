//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const resultado = document.querySelector("#resultado");
//Variables con fechas para el select year
const max = new Date().getFullYear();
const min = max - 10;

//Generar objeto de busqueda 
const datosBusqueda = {
    marca: "",
    year : "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
}

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    
    mostrarAutos(autos); // Muestra los autos al cargar

    //Llena las opciones de años
    llenarSelect();
});

//Eventos para los select y tomar el texto
marca.addEventListener( "change", e => {
    datosBusqueda.marca = e.target.value;
    busquedaGlobal();
});
year.addEventListener( "change", e => {
    datosBusqueda.year = e.target.value;
    busquedaGlobal();
});
minimo.addEventListener( "change", e => {
    datosBusqueda.minimo = e.target.value;
    busquedaGlobal();
});
maximo.addEventListener( "change", e => {
    datosBusqueda.maximo = e.target.value;
    busquedaGlobal();
});
puertas.addEventListener( "change", e => {
    datosBusqueda.puertas = e.target.value;
    busquedaGlobal();
});
transmision.addEventListener( "change", e => {
    datosBusqueda.transmision = e.target.value;
    busquedaGlobal();
});
color.addEventListener( "change", e => {
    datosBusqueda.color = e.target.value;
    busquedaGlobal();
});

//Funciones
function mostrarAutos(autos){
    //Elimina el HTML PREVIO
    limpiarHTML();

    //Crea HTML
    autos.forEach( carro => {
        const parrafo = document.createElement("p");
        parrafo.textContent = `
            ${carro.marca} -
            ${carro.modelo} -
            ${carro.year} -
            ${carro.precio} -
            ${carro.puertas} -
            ${carro.color} -
            ${carro.transmision} -
        `;
        resultado.appendChild(parrafo);
    });
}

//Genera los años del select
function llenarSelect(){
  for(let i=max; i > min; i--){
    const opcion = document.createElement("option");
    opcion.textContent = i;
    opcion.value = i;
    year.appendChild(opcion);
  }
}

//Busqueda por marca 
function busquedaGlobal(){
    const resultado = autos.filter(buscarMarca).filter(buscaryear).filter(buscarMinimo).filter(buscarMaximo).filter(buscarPuertas).filter(buscarTransmision).filter(buscarColor);
    if(resultado.length > 0){
        //console.log(resultado);
        mostrarAutos(resultado);
    }else{
        mostrarMensaje();
    }
}

function buscarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function buscaryear(auto){
    if(datosBusqueda.year){
        return auto.year === parseInt(datosBusqueda.year);
    }
    return auto;
}


function buscarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= parseInt(datosBusqueda.minimo);
    }
    return auto;
}

function buscarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= parseInt(datosBusqueda.maximo);
    }
    return auto;
}

function buscarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === parseInt(datosBusqueda.puertas);
    }
    return auto;
}

function buscarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function buscarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}

//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarMensaje(){
    limpiarHTML();
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay resultado con esta busqueda";
    mensaje.classList.add("alerta", "error");
    resultado.appendChild(mensaje);
}