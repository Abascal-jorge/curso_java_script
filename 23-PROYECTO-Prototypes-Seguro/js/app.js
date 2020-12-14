//constructorres
function seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI(){

}

//Prototypes para seguro
seguro.prototype.cotizarSeguro = function(){
    /*
        americano 1.15
        asiatico 1.05
        europeo 1.35
        precio fijo 20000
        completo 1.50
        basico 1.25   
    */

    let cantidad;
    const base = 2000;
   switch (this.marca) {
       case "1":
           cantidad = base * 1.15;
           break;
       case "2":
           cantidad = base * 1.05;
           break;
       case "3":
           cantidad = base * 1.35;
           break;
       default:
           break;
   }
   let diferencia = new Date().getFullYear() - this.year;
   cantidad -= ((diferencia * 3) * cantidad) / 100;

   if(this.tipo === "basico"){
        cantidad += cantidad * 1.30;
   }else{
        cantidad += cantidad * 1.50;
   }
   return cantidad;
}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    
    const max = new Date().getFullYear(),
          min = max -20;

    const selector = document.querySelector("#year");

    for(let i=max; i>min; i--){
        let opciones = document.createElement("option");
        opciones.textContent = i;
        opciones.value = i;
        selector.appendChild(opciones);
    }
}

//Mostrando el error en el formulario
UI.prototype.mostrarError = (mensaje, tipo) => {
    const div = document.createElement("div");
    div.classList.add("mensaje", "mt-10");
    div.textContent = mensaje;

    if(tipo === "error"){
        div.classList.add("error");
        div.classList.remove("correcto");
    }else{
        div.classList.add("correcto");
        div.classList.remove("error");
    }

    const formulario = document.querySelector("#cotizar-seguro");
    formulario.insertBefore(div, document.querySelector("#resultado"));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (valor, seguro) => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("mt-10");

    contenedor.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold"> Precio: <span class="font-normal">$ ${valor}</span></p>
        <p class="font-bold"> Marca: <span class="font-normal"> ${seguro.marca}</span></p>
        <p class="font-bold"> año: <span class="font-normal"> ${seguro.year}</span></p>
        <p class="font-bold"> Tipo: <span class="font-normal"> ${seguro.tipo}</span></p>
    `;

    const resultado = document.querySelector("#resultado");

    //Mostrar spinner 
    const spinner = document.querySelector("#cargando");
    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none";
        resultado.appendChild(contenedor);
    }, 3000);
    
}



//UInstanciar UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
    ui.llenarOpciones();
});

//Funciones
eventListeners();
function eventListeners(){
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    //leer la marca seleccionada
    const marca = document.querySelector("#marca").value;
    //Leer el año seleccionado
    const year = document.querySelector("#year").value;
    // Leer el tipo de cobertura
    const tipo = document.querySelector(`input[name="tipo"]:checked`).value;

    if(marca === "" || year === "" || tipo === ""){
        ui.mostrarError("Todos los campos son obligatorios", "error");
        return;
    }

    ui.mostrarError("Cotizando...", "correcto");

    //Ocultar cotizaciones previas
    const resultados = document.querySelector("#resultado div");
    if(resultados != null){
        resultados.remove();
    }

    //Instanciar seguro
    const seguro1 = new seguro(marca, year, tipo);
    ui.mostrarResultado(seguro1.cotizarSeguro(), seguro1);
}
