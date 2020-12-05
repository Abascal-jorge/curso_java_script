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

const medidas ={
    peso: "",
    medida: "1m"
}

const union = Object.assign(usuario, medidas);
const juntarobjetos = { ...usuario, ...medidas};

console.log(usuario);
console.log(medidas);
console.log(union);
console.log(juntarobjetos);