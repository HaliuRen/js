//console.log('funciona');

// querySelector 
//retorna de 0 o 1 Elemento
const heading = document.querySelector('.header__texto h2') //seleccionando el elelemto, (uasando clases, ids, o etiquetas)
heading.textContent = 'Nuevo Heading'; //cambiando el texto
heading.classList.add('nueva-clase'); //agregando nueva clase
console.log(heading);


// querySelectorAll
//retorna todos los elementos que coincidan con las clases, id, etiquetas que se le indiquen
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace'; //cambiando el texto del enlace
enlaces[0].classList.add('nueva-clase'); //agregando una clase 
// enlaces[0].classList.remove('navegacion__enlace'); //eliminando una clase del elemento
//console.log(enlaces);


// getElementById - esta sintaxis ya casi no se ocupa
const heading2 = document.getElementById('heading');
console.log(heading2);



// createElement

// Generar nuevo enlace
const nuevoEnlace = document.createElement('A') // se recomienda colocar en mayuscula las etiquetas que se van a agregar, solo el nombre, sin <> y sin cierre

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.thml';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); //agregando enlace como hijo de la clase navegacion

console.log(nuevoEnlace);






// Eventos

console.log(1);

window.addEventListener('load', function() { // load espera a que el JS y los archivps que dependen del HTML esten listos
    console.log(2);
});

window.onload = function() { // load - lo mismo que el load de arriba
    console.log(3);
}

// Se utilizara mas este load

document.addEventListener('DOMContentLoaded', function(){ // solo espera por el HTML, pero no espera CSS o imagenes, el html se descarga mas rapido que el js
    console.log(4);
})

console.log(5);


// load con funciones 
window.addEventListener('load', imprimir);

function imprimir(){
    console.log(6);
}


//scroll

window.onscroll = function(){
    console.log('scrolling...');
}



// // Seleccionar elementos y asociarles un evento

// // ejemplo con el boton de enviar de un formulario , el evento click se recomienda usar, en imagenes, texto etc
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); //usarlo siempre en formularios

//     console.log('enviando formulariio');
// });



//Eventos de los Inputs y Textarea

//ejemplo- se ve en la consola lo que se esta escribiendo en el formulario


// Validando formulario

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


// Evento de Submit 
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;
    
    if(nombre === '' || email === '' || mensaje === '' ) {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; // corta la ejecucion del codigo
    }

    mostrarAlerta('El mensaje ha sido enviado');
    
    // Enviar el formulario
    console.log('Enviando Formulario');
});


// mostrando en consola lo que se ingresa por el formulario
function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

// validando formulario para enviar alerta
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}











