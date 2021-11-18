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