// Métodos de propiedad
// es un objeto con funciones
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo canción con el id: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre){
        console.log(`creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)
}


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');

