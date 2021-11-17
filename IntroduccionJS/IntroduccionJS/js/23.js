//SWITCH
// PARA MULTIPLES CONDICIONES

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario va a pagar con cheque');
        break;
    case 'efectivo':
        console.log('Pagaste en efectivo');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}