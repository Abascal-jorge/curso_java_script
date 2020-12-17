//Variables del etiquetas
const formulario = document.querySelector("#agregar-gasto");
const spanPresupuesto = document.querySelector("#total");
const spanrestante = document.querySelector("#restante");
const listadoGastos = document.querySelector(".list-group");

let listadoPresupuesto = [];
let usuarioPesupuesto;
let presupuestoFijo;

MyApp();
 
function MyApp(){
    document.addEventListener("DOMContentLoaded", () => {
        envio(prompt("Ingresa tu presupuesto"));
    });
}


//Verificando submit
formulario.addEventListener("submit", verificancionFormulario);

function verificancionFormulario(e){
    e.preventDefault();
    const gasto = document.querySelector("#gasto").value;
    const cantidad = parseInt(document.querySelector("#cantidad").value);
    //console.log(cantidad);
    if( gasto === "" || cantidad <= 0){
        UI.mostrarErrorSueldo("Todo los campos son obligatorios ingresa un gasto y su cantidad");
        return;
    }

    let actualPresupuesto = usuarioPesupuesto.presupuestoActual();

    if( cantidad <= actualPresupuesto){
        listadoPresupuesto = [...listadoPresupuesto, {gasto, cantidad}];
        usuarioPesupuesto.descontarPresupuesto(cantidad);
        UI.mostrarGastos(listadoPresupuesto);
        UI.llenarRestante( usuarioPesupuesto.damepresupuesto() );
        UI.tipoAlerta();
    }else{
        UI.mostrarErrorSueldo(`Tu presupuesto es de ${actualPresupuesto}`);
    }
};

//Funcion llama prompt para ingresar dinero
function envio(dinero){
    const presu = new IngresoSueldo(dinero);
    usuarioPesupuesto = presu;
    presupuestoFijo = dinero;
    presu.presupuestoValido();
}


//Clase para Descuento
class IngresoSueldo{

    constructor(presupuesto){
        this.presupuesto = parseInt(presupuesto);
    }

    presupuestoValido(){
        //console.log(parseInt(this.presupuesto));
        if( this.presupuesto > 0 ){
            UI.llenarPresupuesto( this.presupuesto );
            UI.llenarRestante( this.presupuesto );
        }else{
            console.log("Incorrecto");
            envio(prompt("Ingresa tu presupuesto"));
        }
    }

    descontarPresupuesto(menos){
        this.presupuesto -= menos;
    }

    presupuestoActual(){
        return this.presupuesto;
    }

    damepresupuesto(){
        return this.presupuesto;
    }

    aumentarPresupuesto(monto){
        this.presupuesto += monto;
    }

}


//Clase para UI
class UI{

    static llenarPresupuesto(monto){
        spanPresupuesto.textContent = monto;
    }

    static llenarRestante(monto){
        spanrestante.textContent = monto;
    }

    static mostrarErrorSueldo(mensaje){
        const divAgotado = document.createElement("div");
        divAgotado.textContent = mensaje;
        divAgotado.classList.add("mostrar_presupuesto");
        formulario.appendChild(divAgotado);

        setTimeout(() => {
            divAgotado.remove();
        }, 3000);
    }

    static mostrarGastos(listadoPresupuesto){

        while(listadoGastos.firstChild){
            listadoGastos.firstChild.remove();
        }


        listadoPresupuesto.map( lista => {
            const listado = document.createElement("li");
            const eliminar = document.createElement("a");
            listado.innerHTML = `
                ${lista.gasto}
                <span>$${lista.cantidad}</span>
            `;
            eliminar.textContent = "Borrar X"
            eliminar.addEventListener("click", (e) => {
                e.preventDefault();
                //alert(lista.gasto);
                const nuevoListado = listadoPresupuesto.filter( producto => producto.gasto !== lista.gasto);
                listadoPresupuesto = [...nuevoListado];
                UI.mostrarGastos(listadoPresupuesto); 
                usuarioPesupuesto.aumentarPresupuesto(lista.cantidad);
                UI.llenarRestante( usuarioPesupuesto.damepresupuesto() );
                UI.tipoAlerta();
            });
            listado.appendChild(eliminar);
            listadoGastos.appendChild(listado);
        });
    }

    static tipoAlerta(){
        const restanteDiv = document.querySelector(".restante");
        if( usuarioPesupuesto.damepresupuesto() > presupuestoFijo / 2){
            restanteDiv.classList.add("alert-success");
            restanteDiv.classList.remove("alert-danger");
            restanteDiv.classList.remove("alert-warning");
        }else if( presupuestoFijo / 2 === usuarioPesupuesto.damepresupuesto() ){
            restanteDiv.classList.add("alert-warning");
            restanteDiv.classList.remove("alert-danger");
            restanteDiv.classList.remove("alert-success");
        }else{
            restanteDiv.classList.add("alert-danger");
            restanteDiv.classList.remove("alert-warning");
            restanteDiv.classList.remove("alert-success");
        }
    }
}

// alert-danger alert-success alert-warning