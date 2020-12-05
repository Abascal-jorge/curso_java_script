//Object Literal
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

// object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Producto("televisor", 2400);

console.log(producto1);