//DESTRUCTURING DE OBJETOS

const producto = {
    nombre: 'Laptop HP',//porpiedad
    precio: 15000,
    disponible: true
}

//Forma Anterior 
//Extraer una porpiedad de un OBJETO
//Se asigna una propiedad del OBJETO a una varibale 
const precioProducto = producto.precio;
const nombreProducto = producto.nombre;

console.log(precioProducto);
console.log(nombreProducto);


//DESTRUCTURING
//Extrae las porpiedades de un objeto, declara las variables y añ mismo tiempo las asigna 
const {precio, nombre} = producto;//se puede extraer una o varias porpiedades en una linea, y se pueden usar por separado

console.log(precio);
console.log(nombre);


