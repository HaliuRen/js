// Clases

class Producto {
    constructor(nombre, precio) {//constructor
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {//prototype
        return `El Producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor', 800);//instanciando
const producto3 = new Producto('Laptop', 300);

// Herencia

class Libro extends Producto {// heredando todo lo que contiene la clase PRODUCTO
    constructor(nombre, precio, isbn) {// para usar el constructor de la clase PADRE
        super(nombre, precio); //obteniendo los atributos de la clase PADRE
        this.isbn = isbn; //atributo exclusivo de la clase HIJO (libro)
    }

    formatearProducto(){
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`; //concatenando el prototype de PRODUCTO
    }
}

const libro = new Libro('Javascript la Revolución', 120, '20159593'); //instanciando

console.log(libro.formatearProducto() );
console.log(producto3.formatearProducto() );
console.log(producto2);


