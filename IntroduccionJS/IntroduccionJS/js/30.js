// Promises
const usuarioAutenticado = new Promise( (resolve,  reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado');
    } else {
        reject('No se puede iniciar sesión')
    }
});

//console.log(usuarioAutenticado);

// En los promises existen 3 valores
// Rending: no se ha cumplido pero tampoco se ha rechazado
// Fulfiled: ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir

//accediendo al promise
usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

