
let DB;

document.addEventListener("DOMContentLoaded", () => {

    creandoBD();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});


function creandoBD(){

    // Creando la base de datos version 1
    let crmDB = window.indexedDB.open("citas", 1);

    //Si hay un error esta funcion pertenece a indexedDB
    crmDB.onerror =  function(){
        console.log("Hubo un error a la hora de crear la base de datos");
    }

    //Si se creo bien la base de datos
    crmDB.onsuccess = function(){
        console.log("Base de datos creada");
        DB = crmDB.result;
    }

    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;
        const objectStore = db.createObjectStore("citas", {
            keyPath: "citas",
            autoIncrement: true
        });

        objectStore.createIndex("nombre", "nombre", { unique: false });
        objectStore.createIndex("email", "email", { unique: true });
        objectStore.createIndex("telefono", "telefono", { unique: false });
    }
}

function crearCliente(){
    //console.log(DB);
    let transaction = DB.transaction(["citas"], "readwrite");

    transaction.oncomplete = function(){
        console.log("Transaccion completada");
    }

    transaction.onerror = function(){
        console.log("Hubo un error");
    }
    
    const objectStore = transaction.objectStore("citas");

    const cliente = {
        nombre: "Jorge",
        email: "jorgeabascal20@gmail.com",
        telefono: 9841781139
    }

    const peticion = objectStore.put(cliente);

    //console.log(peticion);
}