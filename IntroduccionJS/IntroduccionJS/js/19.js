function suma(n1, n2){
    return n1 + n2; //solo esta devolviendo el resultado
}

//para poder utilizar el resultado , lo asignamos a una variable y despues podemos utilizar el resultado
const resultado = suma(2, 3);

console.log(resultado);


//EJEMPLO

let total = 0;

//Funcion que suma los precios al carrito de compras
function agregarCarrito(precio){
    return total += precio;
}


// funcion para calcular el impuesto del total del carrito de compras y lo suma
function calcularImpuesto(total){
    return 1.15 * total;
}

//mandando los argumentos a la funcion de agregar carrito
total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total); // total del carrito de compras

const totalAPagar = calcularImpuesto(total); // asignando la funcion calcular impuesto al carrito 

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`); //mostrando el total 