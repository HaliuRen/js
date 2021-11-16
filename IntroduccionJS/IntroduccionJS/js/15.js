// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// Arreglo de objetos
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Television 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },

]


// forEach
// se ejcutara cada vez que encuentre un elemento en el arreglo, en este caso se ejecuto por que Marzo si existe en el arreglo
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes
//Para verificar que un lemento existe en el arreglo, retorna true o false
let resultado = meses.includes('Marzo');
console.log(resultado); 

// Some
// Ideal para arreglo de objetos, retorna true o false, verifica si existe un elemento en el arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre == 'Celular'
})

resultado = carrito.some(producto => producto.nombre === 'Tablet'); // segunda forma

console.log(resultado);

// Reduce 
// metodo para sumar el total de un carrtio de compras
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0); //sumara desde la posicion 0

resultado = carrito.reduce((total, producto) =>total + producto.precio, 0);// segunda forma

console.log(resultado);


// Filter
// para filtrar los elementos de un arreglo

//muestra todos los elementos cuyo precio sea mayor a 400
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

console.log(resultado);

//muestra todos los elementos cuyo nombre sea diferente de Celular
resultado = carrito.filter(function(producto){
    return producto.nombre !='Celular'
});

console.log(resultado);


