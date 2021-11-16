// FUNCIONES

//declarando la funcion
function sumar(){
    console.log(10 +10);
}

//llamando a la funcion
sumar();


// Expresion de la función
const sumar2 = function(){
    console.log( 3 + 3 );
}

sumar2();

// IIFE
//funciones que se mandan a llamar a si mismas, sirven para proteger variables de ptrp archivo, es decir para evitar modificarlas, estas no sirven para reutilizar

(function(){
    console.log('Esto es una funcion');
})();


//JS se ejecuta en dos vueltas
// la primera etapa es de registro o creacion (funciones)
//ña segunda es de ejecucion del codigo

sumar3(); // 2 etaoa

function sumar3(){// 1 etapa
    console.log('vnlsdfnv');
}

