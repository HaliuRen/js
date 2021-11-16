//ONJETOS

const producto = {
    nombre: 'Laptop HP',//porpiedad
    precio: 15000,
    disponible: true
}


console.log(producto);

//Acceder a las propiedades del objeto

//sintaxis 1 mas usada
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//sintaxis 2
console.log(producto["nombre"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);

//agregar propiedades al objeto
producto.imagen = 'imagen.jpg';

console.log(producto);

//Eliminar propiedades 
delete producto.disponible;
console.log(producto);