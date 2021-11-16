//string o cadenas de texto

const producto = "Aprendiendo Javascript con el curso Desarrollo Web completo"; //sintaxis mas usada 
const producto1 = 'Monitor de 20 pulgadas'; //sintaxis mas usada

const producto2 = String('Monitor de 30 Pulgadas');
const producto3 = new String('Monito de 50 Pulgadas');



const tweet = "Aprendiendo Javascript con el curso Desarrollo Web completo"; //sintaxis mas usada 
const email = 'correo@correo.com'

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(typeof producto3);//typeof para saber el tipo de dato de una variable

//METODOS PARA STRING
//LENGTH - para saber la longitud de una cadena de texto
console.log(producto.length);

//INDEXOF - retorna posición - para encontrar un elemento en un string y muestra cual es su posicion
console.log(tweet.indexOf('Javascript'));
console.log(tweet.indexOf('Tablet')); //mostrara posiciones -1 (negativas) eso es por que no existe el contenido en la cadena de caracter
console.log(email.indexOf('@')); //expresion regular para validar si es un correo 

//INCLUDES -retorna true o false 
console.log(tweet.includes('Javascript'));
console.log(producto2.includes('Tablet'));