const reproductor = {
    cancion: "",
    reproducir : id => console.log(`Reproduciendo la cancion con el id ${id}`),
    pausar : id => console.log(`Pausando la cancion con el id ${id}`),
    borrar : id => console.log(`Borrando la cancion con el id ${id}`),
    playlist : lista => {
        lista.forEach( cancion => console.log(`Cancion en play list ${cancion}`))
    },
    set nuevacancion(cancion){
        this.cancion = cancion;
        console.log(`Agregando cancion ${cancion}`);
    },
    get devolverCancion(){
        console.log( this.cancion );
    }
}

reproductor.nuevacancion = "Hawuei maluma";
reproductor.devolverCancion;
reproductor.playlist(["Bad bunny", "Maluma", "Guns and roses", "Belinda", "Danna paola"]);
reproductor.reproducir(30);
reproductor.pausar(20);
reproductor.borrar(10);