//Arreglos o Arrays

const numeros = [10,20,30,40,50];
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);//mostrar arreglo en formato tabla

//se pueden tener arreglos dentro de otro arreglo, igual un arreglo puede tener varios tipos de datos
const arreglo = ["Hola", 10, true, "si", null, {nombre: "Perla", trabajo: "programadora"}, [1,2,3]];
console.log(arreglo);

//Acceder a los valores de un arreglo
console.log(numeros[4]);//se accede a un valor de un arreglo con su indice
console.log(numeros[2]);
console.log(numeros[200]);

//Conocer la extension de un arreglo
console.log(meses.length);

//muestra todo lo que hay en un arreglo, de forma iterativa 
numeros.forEach( function(numero){
    console.log(numero);
})


// METODOS PARA ARRAYS

// Agregar elementos al array


// 1 forma de agregar o modificar elementos siempre y cuando se conozca el indice del elemento
numeros[5] = 10;//agregando un elemento
numeros[3] = 10;//modificando un elemento
console.log(numeros);

// PUSH
//agregar elementos al final de arreglo 
numeros.push(60);
numeros.push(60,70,80);

// UNSHIFT
//agrega elementos al inicio del arreglo
numeros.unshift(-10,-20,-30);

console.table(numeros);

const mesess = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

meses.pop(); // elimina el ultimo elemento
meses.shift(); // elimina el primer elemento
 
//elimina de acuerdo a la posicion que le indiques
meses.splice(1,1); // (posiion del elemento, cuantos elementos deseas eliminar a partir de la posicion)
console.table(meses);


// Rest Operator o Spread Operator
//Otra forma de agregar elementos sin necesidad de modiciar el array principal
const nuevoArreglo = ['Junio', ...meses];
console.log(nuevoArreglo);
