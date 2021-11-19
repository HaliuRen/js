// Notificaciones API

// const boton = document.querySelector('#boton');//haciendo referencia a document (HTML) y al elemento con id BOTON
// boton.addEventListener('click', function(){ // ejecutara todo lo que este dentro de la funcion
//     console.log('diste click'); 
//     console.log(2 + 2);
// });

const boton = document.querySelector('#boton');
 //pidiendo permisos al usuario , siempre se piden permisos al usuario
boton.addEventListener('click', () => { 
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`) )
})

//Si el usuario da permiso muestra la notificacion
if (Notification.permission == 'granted') {
    new Notification('Esta es una notificación' , {
        icon: 'images/js.png',
        body: 'Tienes un mensaje'
    })
}

