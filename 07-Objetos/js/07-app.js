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


usuario.edad = 28;
 
delete usuario.correo;

console.log(usuario);
