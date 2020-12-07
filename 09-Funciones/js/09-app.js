const reproductor = {
    reproducir : function (id) {
        console.log(`Reproduciendo la cancion con el id ${id}`);
    },
    pausar : function (id) {
        console.log(`Pausando la cancion con el id ${id}`);
    },
    borrar : function (id) {
        console.log(`Borrando la cancion con el id ${id}`);
    },
    playlist : function (lista) {
        lista.forEach( cancion => {
            console.log(`Cancion en play list ${cancion}`);
        });
    }
}

reproductor.playlist(["Bad bunny", "Maluma", "Guns and roses", "Belinda", "Danna paola"]);
reproductor.reproducir(30);
reproductor.pausar(20);
reproductor.borrar(10);