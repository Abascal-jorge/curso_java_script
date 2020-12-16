class Cliente{

    constructor(nombre, edad, apellido){
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido;
    }

    dameInformacion(){
        console.log(`Hola ${this.nombre} ${this.apellido} tu edad es ${this.edad}`);
    }

}

const Cliente2 = class extends Cliente{

    constructor(nombre, edad, apellido, estado){
        super(nombre, edad, apellido);   
        this.estado = estado;
    }

    compromiso(){
        console.log(`Hola ${this.nombre} ${this.apellido} tu edad es de ${this.edad} y tu estado civil es ${this.estado}`);
    }

}

const usuario = new Cliente("Jorge", 24, "Abascal");
const empresario = new Cliente2("Manuel", 23, "Abascal", "soltero");

usuario.dameInformacion();

empresario.dameInformacion();
empresario.compromiso();