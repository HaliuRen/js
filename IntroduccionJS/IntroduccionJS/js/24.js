//FOR LOOP

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

//ejercicio de entrevistas
for (let i = 1; i <= 100; i++) {
    if ( i % 2 === 0) {
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El numero ${i} es IMPAR`);
    }
}


//FOR - EJEMPLO CON ARRAY

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    // console.log(carrito[i].nombre); //accediendo al nonbre
    // console.log(carrito[i].precio); // accediendo al precio
}



// WHILE LOOP
//Se ejecuta mientras la condicion sea verdadera, si no no se ejecuta

// let i = 0; //indice

// while (i < 10) { //condicion

//     console.log(i); 

//     i++; //Incremento 
// }

// ejercico 2
// let i = 1; //indice

// while (i <= 100) { //condicion
//     if (i % 2 === 0) {
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);        
//     }

//     i++; //Incremento 
// }

//EJEMPLO CARRITO
let i= 0; //indice

while (i < carrito.length) { //condicion
    console.log(carrito[i].nombre);

    i++; //Incremento 
}





// DO WHILE LOOP
// Si no cumple la condicion se ejecutara almenos una vez el codigo // diferencia entre while y dowhile
    let i = 100; // indice

    do { //codigo
        
        console.log(i);

        i++; //incremento

    } while (i < 10); // condicion