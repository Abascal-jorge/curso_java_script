//Variables del etiquetas
const formulario = document.querySelector("#agregar-gasto");
const spanPresupuesto = document.querySelector("#total");
const spanrestante = document.querySelector("#restante");
const listadoGastos = document.querySelectorAll("#list-group");


let listadoPresupuesto = [];

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
        console.log("todo mal ingresa cantidades validas");
        return;
    }
    listadoPresupuesto = [...listadoPresupuesto, {gasto, cantidad}];
    console.log(listadoPresupuesto);
    console.log("Submit completo");
};


//Funcion llama prompt para ingresar dinero
function envio(dinero){
    const presu = new IngresoSueldo(dinero);
    presu.presupuestoValido();
}

//Clase para Descuento
class IngresoSueldo{

    constructor(presupuesto){
        this.presupuesto = presupuesto;
    }

    presupuestoValido(){
        //console.log(parseInt(this.presupuesto));
        if( parseInt(this.presupuesto) > 0 ){
            validacionFormulario.llenarPresupuesto( this.presupuesto );
            validacionFormulario.llenarRestante( this.presupuesto );
        }else{
            console.log("Incorrecto");
            envio(prompt("Ingresa tu presupuesto"));
        }
    }

    descontarPresupuesto(){

    }

}


//Clase para UI
class validacionFormulario{
    constructor(gasto, presupuesto){

    }

    static llenarPresupuesto(monto){
        spanPresupuesto.textContent = monto;
    }

    static llenarRestante(monto){
        spanrestante.textContent = monto;
    }
}