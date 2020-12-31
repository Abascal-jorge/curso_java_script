import { obtenerClientes, eliminar } from "./API.js";

(function(){
    document.addEventListener("DOMContentLoaded", mostrarClientes);
    const tabla = document.querySelector(".bg-gray-100");
    tabla.addEventListener("click", eliminarCliente);

    async function mostrarClientes(){
        const cliente = await obtenerClientes();
        cliente.forEach( datos => {
            const { nombre, telefono, empresa, email, id} = datos;

            const row = document.createElement("tr");

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            tabla.appendChild(row);
        });
    }

    function eliminarCliente(e){
        if(e.target.classList.contains("eliminar") ){
            const clienteID = parseInt(e.target.dataset.cliente);
            Swal.fire({
                title: 'Eliminar Cliente?',
                text: "Si eliminas este elemento no podras recuperarlo!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si,Eliminar elemento!'
            }).then((result) => {
                if (result.isConfirmed) {  
                    eliminar(clienteID);
                    Swal.fire(
                            'Cliente eliminado!',
                            'El cliente fue eliminado',
                            'success'
                    );
                }
            });
        }
    }

})();