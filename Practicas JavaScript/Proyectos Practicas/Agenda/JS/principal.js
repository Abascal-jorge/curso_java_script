const datosListado = document.querySelector(".datos-listado");


document.addEventListener("DOMContentLoaded", crearHTML);
let resultado = [];

function crearHTML(){

    limpiarHTML();

    resultado = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : [];


    if(resultado.length > 0){
        resultado.forEach( elementos => {
            const trTable = document.createElement("tr");
            const {nombre, telefono, direccion, empresa, estado, id} = elementos;
            trTable.innerHTML = `
                <td>${nombre}</td>
                <td>${telefono}</td>
                <td>${direccion}</td>
                <td>${empresa}</td>
                <td>${estado}</td>
                <td class="botones">
                    <a data-cliente=${id} class="eliminar">Eliminar</a>
                    <a href="EditandoUsuario.html?id=${id}">Editar</a>
                </td>
            `;
            datosListado.appendChild(trTable);
        });
        eliminarElemento();
    }

}


function limpiarHTML(){
    while(datosListado.firstChild){
        datosListado.firstChild.remove();
    }
}

function eliminarElemento(){
    const elementoEliminar = document.querySelectorAll(".eliminar");
    elementoEliminar.forEach(element => {
        element.addEventListener("click", () => {
            resultado = resultado.filter( contacto => contacto.id !== parseInt(element.dataset.cliente));
            localStorage.setItem("usuarios", JSON.stringify(resultado));
            crearHTML();
        });
    });
}