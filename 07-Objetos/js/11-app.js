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
    },
    mostrarInformacion: function(){
        console.log(`Bienvenido ${this.nombre} y tu edad es de ${this.edad}`)
    }
}

const medidas ={
    peso: "",
    medida: "1m"
}

usuario.mostrarInformacion();