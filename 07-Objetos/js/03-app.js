const usuario = {
    nombre: "Jorge",
    apellido: "Abascal",
    correo: "jorgeabascal20@gmail.com",
    edad: 24
}


//Agregando nuevos elementos al objeto
usuario.hobby = "Futbol";

//Borrando un elemento del objeto 

delete usuario.edad;

console.log(usuario);