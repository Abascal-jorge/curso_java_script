//Verificandp si el navegador es compatible con SERVICE WORKERS
if( "serviceWorker" in navigator){

    navigator.serviceWorker.register("./sw.js")
        .then(registrado => console.log("Service worker compatible", registrado))
        .catch( error => console.log( error ) )

}else{
    console.log("service workers no soportador");
}