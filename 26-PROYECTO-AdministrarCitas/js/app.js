//Creando variables con los id de las etiquetas de los campos y formulario 
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

let estado;

//Definir clases
class Citas{
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }

    modificarCitas(id){
        this.citas = this.citas.filter(cita => cita.id != id);
    }

    editarCitas(citaActualizada){
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}

class UI{

    imprimirAlerta(mensaje, tipo){
        //Crear el div
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert", "d-block", "col-12");
        divMensaje.textContent = mensaje;

        //AGREGAR CLASE EN BASE AL TIPO DE ERROR
        if( tipo === "error"){
            divMensaje.classList.add("alert-danger");
        }else{
            divMensaje.classList.add("alert-success");
        }

        const contenido = document.querySelector("#contenido");
        contenido.insertBefore(divMensaje, document.querySelector(".agregar-cita"));

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    imprimirCitas({citas}){

        this.limpiarHTML();
        
        citas.forEach( cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
            //console.log(cita);
            const divCita = document.createElement("div");
            divCita.classList.add("cita", "p-3");
            divCita.dataset.id = id;

            //Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement("h2");
            mascotaParrafo.classList.add("card-title", "font-weight-bolder");
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement("p");
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder"> Propietario: </span> ${propietario}    
            `;

            const telefonoParrafo = document.createElement("p");
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder"> Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement("p");
            fechaParrafo.innerHTML = `
                 <span class="font-weight-bolder"> Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement("p");
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder"> Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement("p");
            sintomasParrafo.innerHTML = `
                 <span class="font-weight-bolder"> Sintomas: </span> ${sintomas}
            `;

            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("btn", "btn-danger", "mr-2");
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>`;
            btnEliminar.addEventListener("click", () => eliminarCita(id));

            const btnEditar = document.createElement("button");
            btnEditar.classList.add("btn", "btn-success", "mr-2");
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
            </svg>`;
            btnEditar.onclick = () => actualizarCita(cita);

            //Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);

        });
    }

    limpiarHTML(){
        while( contenedorCitas.firstChild ){
            contenedorCitas.removeChild( contenedorCitas.firstChild );
        }
    }
}


const ui = new UI();
const administrarCitas = new Citas();


//Rergistrar y llamar eventos
eventListener();

function eventListener() {
    mascotaInput.addEventListener("input", datosCitas);
    propietarioInput.addEventListener("input", datosCitas);
    telefonoInput.addEventListener("input", datosCitas);
    fechaInput.addEventListener("input", datosCitas);
    horaInput.addEventListener("input", datosCitas);
    sintomasInput.addEventListener("input", datosCitas);

    formulario.addEventListener("submit", nuevaCita);
}

//Objeto para llenar los datos de cada cita
const citaObj = {
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: ""
}

function datosCitas(e) {
    citaObj[e.target.name] = e.target.value;
}

//Validar y agrega una nueva Cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    if( mascota === "" || propietario === "" || telefono === "" || fecha === "" || hora === "" || sintomas === ""){
        ui.imprimirAlerta("Todos los campos son obligatorios", "error");
        return;
    }

    if(estado){
        administrarCitas.editarCitas({...citaObj});
        ui.imprimirAlerta("Editado correctamente");
        //Cambiar name del boton
        formulario.querySelector(`button[type="submit"]`).textContent = "Crear Cita";

        estado = false;
    }else{
            //Generar id unico
        citaObj.id = Date.now();
        //Creando cita 
        administrarCitas.agregarCita({...citaObj});
        ui.imprimirAlerta("Se agrego correctamente...");
    }
    //Reiniciar objeto
    reiniciarObjeto();

    //Reiniciar formulario
    formulario.reset();

    //Imprimir citas
    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto(){
    citaObj.mascota = "";
    citaObj.propietario = "";
    citaObj.telefono = "";
    citaObj.fecha = "";
    citaObj.hora = "";
    citaObj.sintomas = "";
}

function eliminarCita(id){
    administrarCitas.modificarCitas(id);
    ui.imprimirAlerta("Todos los campos son obligatorios");
    ui.imprimirCitas(administrarCitas);
}

function actualizarCita(cita){

    const {mascota, propietario, fecha, hora, sintomas, telefono, id} = cita;

    //LLENAR EL FORMULARIO DE CITAS CON LOS DATOS DE LA CITA SELEECCIONADA
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;
    
    //LLENAR EL OBJETO
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
    //Cambiar name del boton
    formulario.querySelector(`button[type="submit"]`).textContent = "Guardar Cambios";

    estado = true;

}