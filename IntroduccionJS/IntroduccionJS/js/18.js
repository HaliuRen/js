

function sumar(numero1, numero2){ // parametros - recibiendo los argumentos
    console.log(numero1 + numero2);
}
sumar(10, 10); // Argumentos o los valores reales - mandando los argumentos 
sumar(10, 20);
sumar(10, 30);
sumar(10, 40);

// Expresion de la función
const sumar2 = function(n1, n2){
    console.log( n1 + n2);
}

sumar2(5, 10);

// Colocando un valor por deafult a los parametros, esto es caso de no recibir ningun argumento o todos los argumentos que pide la funcion, asi se evitan errores
function sumar(n1 = 0, n2 = 0){ 
    console.log(n1 + n2);
}
sumar(10); 
