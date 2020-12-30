function ejemplo(){

    return new Promise( (resolve, reject ) => {
        let cierto = false;
        setTimeout(() => {
            if(cierto){
                resolve("La lista de de usuarios se descargo");
            }else{
                reject("Error base de datos no enecontrada");
            }
        }, 3000);
    });
}

async function ejecutar(){

    try {
        console.log(2 + 2);

        const respuesta = await ejemplo();

        console.log(respuesta);

        console.log("Hola mundo");
    } catch (error) {
        console.log(error);
    }

}


ejecutar();