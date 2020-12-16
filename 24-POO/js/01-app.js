class Cliente{
    constructor(apellido, precio){
        this.apellido = apellido;
        this.precio = precio;
    }
    
    dameNombre(){
        console.log(`Bienvenido ${this.apellido} tu saldo es de ${this.precio}`);
    } 

    static ejemplo(){
        console.log("Ejemplo funcion sin instancia");
    }
}

const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const usuario = new Cliente("Abascal", 2000);
Cliente.ejemplo();
usuario.dameNombre();
console.log(usuario);

const usuario2 = new Cliente2("Manuel", 4000);
console.log(usuario2);