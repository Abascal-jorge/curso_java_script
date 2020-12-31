const urlAPI = `http://localhost:4000/clientes`;



//uncion agregar nuevo cliente 
export async function consultaAPI(cliente){
    
    try {
        await fetch( urlAPI, {
            method: "POST",
            body: JSON.stringify( cliente ),
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}

//Funcion obtiene todos los datos clientes de  la API

export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch(urlAPI);
        const clientes = await respuesta.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}


//Eliminando cliente

export const eliminar = async id => {
    await fetch(`${urlAPI}/${id}`,{
        method: "DELETE"
    })
}


