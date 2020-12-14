const producto = {
    nombre: "Shampoo",
    precio: 200
}

console.log(producto);


//Objeto con funciones 

function productos(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

function empresa(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

function FormatearEmpresa(empresa){
    const { nombre, precio} = empresa;
    return `${nombre} and ${precio}`;
}

const producto1 = new productos("monitor", 4000);
const empresa1 = new empresa("Costamed", 5000);

console.log(producto1);
console.log(empresa1);
console.log(FormatearEmpresa(empresa1));

