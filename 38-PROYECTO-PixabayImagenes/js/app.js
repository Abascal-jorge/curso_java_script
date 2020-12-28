//Vartiables de selectores
const formulario = document.querySelector("#formulario");
const paginacion = document.querySelector("#paginacion");
const resultado = document.querySelector("#resultado");

const  registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

myApp();

function myApp(){
    formulario.addEventListener("submit", submitBuscar);
}

function submitBuscar(e){
    e.preventDefault();

    //Validar Formulario
    const busqueda = document.querySelector("#termino").value;
    if(busqueda === ""){
        mostrarAlerta("El campo buscar es obligatorio", "error");
        return;
    }

    //Consultar API
    consultandoApi();
}

function mostrarAlerta(mensaje, tipo){
    const errorActivo = document.querySelector(".error");
    if(!errorActivo){
        const alerta = document.createElement("p");
        alerta.textContent = mensaje;
        if(tipo === "error"){
            alerta.classList.add("error");
        }

        formulario.insertBefore(alerta, document.querySelector("#formulario div"));

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function consultandoApi(){
    const buscar = document.querySelector("#termino").value;
    const keyApi = `18401696-3dba22f2415b4860f34f665a3`;
    const url = `https://pixabay.com/api/?key=${keyApi}&q=${buscar}&per_page=${registrosPorPagina}&page=${paginaActual}`;
    
    fetch(url)
        .then( resultado => resultado.json())
        .then( datos => {
            totalPaginas = calcularPaginas(datos.totalHits);
            mostrarImagenes(datos.hits)
        })
}

//Generador que va a registrar la cantidad de elementos de acuerdo a las paginas
function *crearPaginador(total){
    //console.log(total);
    for(let i=1; i<=total; i++){
        yield i;
    }
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostrarImagenes(imagenes){
    while(resultado.firstChild){
        resultado.firstChild.remove();
    }

    //Iterar el arreglo de imagenes y construir html
    imagenes.forEach( imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        resultado.innerHTML += `
            <div class="w-1/2 m:w1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                  <img class="w-full" src="${previewURL}">
                  <div class="p-4">
                     <p class="font-bold> ${likes} <span class="font-light">Me gusta</span></p>
                     <p class="font-bold> ${views} <span class="font-light">Veces Vistas</span></p>
                     <a 
                     class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                     href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
                        Ver Imagen
                     </a>
                  </div>
                </div>
            </div>
        `;
    });

    //Limpiar el paginador previo
    while(paginacion.firstChild){
        paginacion.firstChild.remove();
    }

    //Generamos nuevo paginador
    imprimirPaginador();
}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);

    while(true){
        const {value, done} = iterador.next();
        if(done)return;

        //Caso contrario, genera un boton por cada elemento en el generador
        const boton = document.createElement("a");
        boton.href = "#";
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add("siguiente", "bg-yellow-400", "px-4", "py-1", "mr-2", "font-bold", "mb-4", "uppercase", "rounded");
       
        boton.onclick = () => {
            paginaActual = value;
            consultandoApi();
        }

        paginacion.appendChild(boton);
    }
}