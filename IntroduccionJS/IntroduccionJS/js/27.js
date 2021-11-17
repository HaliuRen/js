// POO

// Object Literal - manual
const producto = {
    nombre: 'Tae',
    precio: 500
}


//Object Constructor - automatico
function Producto(nombre, precio){// recibiedndo parametros
    // construyendo el objeto
    this.nombre = nombre;
    this.precio = precio;
}

// Instanciando el Object Constructor, puede instanciarse varias veces
const producto1 = new Producto('Monitor', 800);
const producto2 = new Producto('Tablet', 300);

console.log(producto1);
console.log(producto2);



// PROTOTYPE
// se pueden usar con diferentes Object Constructor que compartan los mismos atributos

function Cliente(nombre, apellido){// Object Constructor 
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){ // Prototype
    return `El cliente ${this.nombre} ${this.apellido}`;
}

const cliente = new Cliente('Perla', 'Mendoza Osorio'); //Instanciando

console.log(cliente.formatearCliente()); // Imprimiendo en consola


// PROTOTYPE 2
function Producto(nombre, precio){// Object Constructor 
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function(){ // Prototype
    return `El producto ${this.nombre} tiene un costo de ${this.precio}`;
}

const producto3 = new Producto('Laptop', 1500); //Instanciando

console.log(producto3.formatearProducto()); // Imprimiendo en consola