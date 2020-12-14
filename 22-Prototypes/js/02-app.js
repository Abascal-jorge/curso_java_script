//Ejemplo de banco con prototypes creando clases y instancia de objetos


//Creando objeto constructor
function usuarios(nombre, total){
    this.total = total;
    this.nombre = nombre;
}

//Prototypes usuarios
usuarios.prototype.getmostranDatos = function(){
    console.log(`Bienvenido ${this.nombre} tu cuenta tiene ${this.total} pesos`);
};

usuarios.prototype.getTipoUsuario = function(){
    let tipo;
    if( this.total >= 10000){
        tipo = "ORO";
    }else if( this.total >= 5000){
        tipo = "Platino";
    }else{
        tipo = "Normal";
    }
    return tipo;
};

usuarios.prototype.setRetiroBanco = function(retiro){
    this.total -= retiro;
};

//Objeto constructo super usuario
function superUsuarios(nombre, total, inversion){
    usuarios.call(this, nombre, total);
    this.inversion = inversion;
}
const administrador = new superUsuarios("Manuel", 4000, 10000);
administrador.prototype = Object.create(usuarios.prototype);
administrador.prototype.constructor = usuarios;
console.log(administrador);


const usuario1 = new usuarios("Jorge", 150000);
console.log(usuario1);
usuario1.getmostranDatos();

const tipoUsuario = usuario1.getTipoUsuario();
console.log(tipoUsuario);

usuario1.setRetiroBanco(2000);
console.log(usuario1);

