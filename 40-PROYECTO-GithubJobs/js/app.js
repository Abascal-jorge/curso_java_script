//Variables de selectores html
const formulario = document.querySelector("#formulario");
const resultado= document.querySelector("#resultado");


document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", onSubmitFormulario);
});


function onSubmitFormulario(e){
    e.preventDefault();
    
    //Validar Formulario 
    const busqueda = document.querySelector("#busqueda").value;
    if(busqueda === ""){
        mostrarAlerta("El campo es obligatorio...");
        return;
    }

    consultarEmpleos(busqueda);
}

async function consultarEmpleos(buscar){
    const githuburl = `https://jobs.github.com/positions.json?search=${buscar}`;
    const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(githuburl)}`;

    const respuesta = await axios(url);

    mostrarHTML( JSON.parse(respuesta.data.contents));
    //axios.get(url)
     //   .then( respuesta => mostrarHTML( JSON.parse(respuesta.data.contents)))
}

function mostrarHTML(data){
    while( resultado.firstChild ){
        resultado.firstChild.remove();
    }

    if( data.length > 0){
        resultado.classList.add("grid");

        data.forEach(vacante => {
            const { company, title, type, url } = vacante;

            resultado.innerHTML += `
                <div class="shadow bg-white p-6 rounded">
                    <h2 class="text-2xl font-light mb-4">${title}</h2>
                    <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                    <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                    <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
                </div>
            `;
        });
    }else{
        mostrarAlerta("No se encontraron vancates");
    }
}

function mostrarAlerta(mensaje){

    if(!document.querySelector(".error")){
        const alerta  = document.createElement("p");
        alerta.classList.add("error");
        alerta.textContent = mensaje;

        const contenidoForm = document.querySelector(".contenido-form");
        contenidoForm.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}