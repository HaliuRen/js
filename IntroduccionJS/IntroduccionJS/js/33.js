//FETCH API
function obtenerEmpleados() {

    const archivo ='empleados.json'; // asigando a una variable el archivo json o url de la api

    fetch(archivo) //colocando la variable que contiene el archivo o la url 
        .then( resultado => resultado.json())// retornando en formato json
            //console.log(resultado)// para saber si la conexion fue exitosa
            // return resultado.text();// retornando en formato  texto
        // .then( datos => {
        //     console.log(datos); //mostrando los datos del json
        // })
        .then( datos => {
            const { empleados } = datos; //accediendo a los datos del json
            console.log(empleados);
        })
}
obtenerEmpleados(); //llamando funcion



// FETCH API CON ASYNC -AWAIT
async function obtenerEmpleados() {

    const archivo ='empleados.json'; // asigando a una variable el archivo json o url de la api

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados(); //llamando funcion








// function obtenerEmpleados() {

//     const archivo ='empleados.json'; // asigando a una variable el archivo json o url de la api

//     fetch(archivo) //colocando la variable que contiene el archivo o la url 
//         .then( resultado => resultado.json())// retornando en formato json
//             //console.log(resultado)// para saber si la conexion fue exitosa
//             // return resultado.text();// retornando en formato  texto
//         // .then( datos => {
//         //     console.log(datos); //mostrando los datos del json
//         // })
//         .then( datos => {
//             const { empleados } = datos; //accediendo a los datos del json
//             //iterando el arreglo del json para mostrar todos los datos del json
//             empleados.forEach( empleado => {
//                 console.log(empleado.id);
//                 console.log(empleado.nombre);
//                 console.log(empleado.puesto);
//             })
//         })

// }
// obtenerEmpleados(); //llamando funcion