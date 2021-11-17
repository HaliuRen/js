

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Television 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];


//FOREACH
//Unicamente para arreglos, s ejecuta almenos una vez por cada elemento que encuentre en el arreglo
//Para iterar y mostrar en pantalla o consola un arreglo
carrito.forEach(function(producto){ //recibe un parametro 
    console.log(producto.nombre) // se ejecutara por cada elemento que encuentre en el arreglo
});

carrito.forEach(producto => console.log(producto.precio)); //otra sintaxis foreach mas corta

// MAP
// Para crear un nuevo arreglo con el arreglo que asignemos a una nueva variable
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo2);

