"use strict";

const usuario = {
    nombre: "Jorge",
    apellido: "Abascal",
    correo: "jorgeabascal20@gmail.com",
    edad: 24,
    informacion: {
        medidas: {
            peso: "1kg",
            medidas: "1m"
        },
        fabricacion: {
            pais: "china"
        }
    }
}

//Seal permite modificar los valores del objeto que se encuentran en este
//Pero no eliminar o agregar nuevo objetos
Object.seal( usuario);

usuario.nombre = "abas";

console.log(usuario);
console.log(Object.isSealed(usuario));