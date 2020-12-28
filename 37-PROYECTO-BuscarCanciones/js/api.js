import { mostrarLetra } from "./interfaz.js";

//Consultar a la api
export function consultarAPI(artista, cancion){
    const urlApi = `https://private-anon-54cd12ed29-lyricsovh.apiary-mock.com/v1/${artista}/${cancion}`;
    
    fetch(urlApi)
        .then( respuesta => respuesta.json())
        .then( datos => mostrarLetra(datos))
}

