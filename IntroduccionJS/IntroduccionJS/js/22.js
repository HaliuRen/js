//ESTRUCTURAS DE CONTROL

const puntaje = 1000;


if (puntaje === 1000) { // si es igual
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual');   
}


if (puntaje !== 1000) { // si es diferente de 
    console.log('No es igual');
    
} else {
    console.log('Si el puntaje es 1000');
}

//ejemplo 2
const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}

//IF ELSE IF 
const rol = 'Administrador';

if (rol === 'Administrador') {
    console.log('Acceso a todo el sistema');
}else if(rol === 'Editor'){
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho');
}
 else {
    console.log('No tienes acceso');
}
