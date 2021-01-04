// Variables selectores html
const formulario = document.querySelector("#formulario");
const cantidadInput = document.querySelector("#cantidad");
const plazoInput = document.querySelector("#plazo");
const resultado = document.querySelector(".resultado");

//Variable objeto que reune los datos del formulario
const datos = {
    cantidad: "",
    plazo: ""
};

myApp();

function myApp(){
    document.addEventListener("DOMContentLoaded", () => {
        formulario.addEventListener("submit", onCalcular);
    });
    cantidadInput.addEventListener("input", llenarDatos);
    plazoInput.addEventListener("input", llenarDatos);
}

function onCalcular(e){
    e.preventDefault();
    
    const { cantidad, plazo } = datos;
    if(cantidad === "" || plazo === ""){
        mostrarAlerta("Todos Los Campos Son Obligatorios");
        return;
    }
    limpiarHTML();
    crearSpinner();
    setTimeout(() => {
        const informacion = calcularCredito(parseInt(cantidad), parseInt(plazo));
        mostrarHtml(informacion, cantidad, plazo);
    }, 3000);
}

//LLenar el objeto datos con los datos del formulario
function llenarDatos(e){
    datos[e.target.name] = e.target.value;
}

//Function mostrar Alerta
function mostrarAlerta(mensaje){
    if(!document.querySelector(".error")){
        const alerta = document.createElement("div");
        const parrafo = document.createElement("p");
        parrafo.textContent = mensaje;
        alerta.classList.add("error");
        alerta.appendChild(parrafo);
        formulario.insertBefore(alerta, document.querySelector(".before"));
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

//Funcion calcular tiempo y credito de prestamo
function calcularCredito(cantidad, plazo){
    switch (plazo) {
        case 1:
            return {
                intereses: 0.3,
                total: cantidad + (cantidad * 0.3),
                quincenas: plazo * 2,
                pagos: (cantidad + (cantidad * 0.3)) / (plazo * 2)
            };
        case 2:
            return{
                intereses: 0.5,
                total: cantidad + (cantidad * 0.5),
                quincenas: plazo * 2,
                pagos: (cantidad + (cantidad * 0.5))/ (plazo * 2)
            }
        case 3:
            return{
                intereses: 0.7,
                total: cantidad + (cantidad * 0.7),
                quincenas: plazo * 2,
                pagos: (cantidad + (cantidad * 0.7)) / (plazo * 2)
            }
        case 4:
            return{
                intereses: 0.8,
                total: cantidad + (cantidad * 0.8),
                quincenas: plazo * 2,
                pagos: (cantidad + (cantidad * 0.8)) / (plazo * 2)
            }
        default:
            return;
    }
}


function mostrarHtml(informacion, cantidad, plazo){

    const { intereses, total, quincenas, pagos} = informacion;
    const parrafoCantidad = document.createElement("p");
    const parrafoPlazo = document.createElement("p");
    const totalPagar = document.createElement("p");
    const quincenasParrafo = document.createElement("p");
    const resumen = document.createElement("h2");

    resumen.textContent = "Resumen";
    parrafoCantidad.textContent = `La cantidad solicitada es: ${cantidad}`;
    parrafoPlazo.textContent = `El plazo solicitado para el prestamo: ${plazo} Meses`;
    totalPagar.textContent = `Total A pagar con interes de ${intereses} es de: ${total}`;
    quincenasParrafo.textContent = `El total se pagara en ${quincenas} quincenas con un pago de ${pagos}`;

    resultado.classList.add("margen");
    resultado.appendChild(resumen);
    resultado.appendChild(parrafoCantidad);
    resultado.appendChild(parrafoPlazo);
    resultado.appendChild(totalPagar);
    resultado.appendChild(quincenasParrafo);
}

function crearSpinner(){

    const divSpinner = document.createElement("div");
    divSpinner.classList.add("sk-cube-grid");
    divSpinner.innerHTML = `
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
    resultado.appendChild(divSpinner);

    setTimeout(() => {
        divSpinner.remove();
    }, 3000);

}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.firstChild.remove();
        if(resultado.classList.contains("margen")){
            resultado.classList.remove("margen");
        }
    }
}