//OBJECT METHODS

//MODO ESTRICTO - ejecuta el codigo de acuerdoa a las buenas practicass
//si hay un error dejara de ejecutar todo el codigo
"use strict";

//Los obejtos a pesar de estar declarados con CONST se pueden modificar
const producto = {
    nombre: 'Laptop HP',//porpiedad
    precio: 15000,
    disponible: true
}

Object.freeze(producto); //congela el objeto y no permite que se pueda modificar o agregar , eliminar propiedades
//evitar intentar agregar propiedades despues de queun objeto haya sido congelado o marcara error en todo el codigo
//producto.imagen = 'imagen.jpg'; //agregando una propieda nueva al objeto

console.log(Object.isFrozen(producto)); // Para saber si un objeto esta congelado - retorna boolean

console.log(producto);



Object.seal(producto);// no te permite agregar, ni eliminar, pero si permite editar las propiedades existentes
producto.precio = 'Nuevo Precio';//modificando porpiedad precio

console.log(producto);