// Arrow Functions
// Otra forma de crear funciones

const sumar2 = (n1, n2) => console.log(n1+n2); //recibiendo dos parametros
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`) // recibiendo 1 parametro
aprendiendo('Javascript');


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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
meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;

// Some
resultado = carrito.some( producto => producto.nombre == 'Celular');

// Reduce 
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter
resultado = carrito.filter( producto => producto.precio > 400);

//muestra todos los elementos cuyo nombre sea diferente de Celular
resultado = carrito.filter( producto => producto.nombre !='Celular');

console.log(resultado);
