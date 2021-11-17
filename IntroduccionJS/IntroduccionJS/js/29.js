// TRY CATCH
// Aprueba de errores, se usan especificamente en situaciones criticas, ejemplo, error en un inicio de sesion, conexion de una base de dsatos
const numero1 = 20;
const numero3 = 30;

console.log(numero1);

try {
    console.log(numero2);
} catch (error) {
    console.log(error);
}
console.log(numero3);