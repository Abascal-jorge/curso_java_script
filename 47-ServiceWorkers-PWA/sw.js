//Variable para cachear archivos 
const nombreCache = "apv-v1";

const archivos = [
    "/",
    "/index.html",
    "/error.html",
    "/css/bootstrap.css",
    "/css/styles.css",
    "/js/app.js",
    "/js/apv.js"
];

//Cuando se instala el service worker 
self.addEventListener("install", e => {
    console.log("Instalado el service worker");
     e.waitUntil(
         caches.open(nombreCache)
            .then( cache => {
                console.log("Cacheando");
                cache.addAll(archivos)
            })
     )
});

//Activar el service worker
self.addEventListener("activate", e => {
    console.log("Service worker activado");
    console.log(e);

    //Eliminando versiones anteriores
    e.waitUntil(
        caches.keys()
            .then( keys => {
                //console.log(keys);
                return Promise.all(
                    keys.filter( key => key !== nombreCache).map(key => caches.delete(key))
                )
            })
    );

});

//Evento fetch para descargar archivos estatico
self.addEventListener("fetch", e => {
    console.log("Fetch...", e);

    e.respondWith(
        caches.match(e.request)
              .then( respuestaCache => {
                  return respuestaCache
              })
              .catch( () => caches.match("/error.html") )
    );

});