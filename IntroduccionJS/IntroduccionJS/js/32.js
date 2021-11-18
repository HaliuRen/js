// Async - Await


function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes...espere...'); //primero muestra esto

        setTimeout( () => {
            resolve('Los clientes fueron descargados'); //haciendo tiempo para mostrar el segundo mensaje
        }, 5000); // 5 segundos
    });
}

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos...espere...'); //primero muestra esto

        setTimeout( () => {
            resolve('Los pedidos fueron descargados'); //haciendo tiempo para mostrar el segundo mensaje
        }, 3000); // 3 segundos
    });
}

async function app() {
    try {
        // const resultado = await descargarNuevosClientes(); //haciendo pausa hasta que el promise devuelva su resultado
        // console.log(resultado); //mostrando el promise

        // para hacer dos procesos al mismo tiempo, se asignan en un arreglo de promise
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) { // si no carga mostrara error
        console.log(error);
    }
}

app(); //llamando a la funcion