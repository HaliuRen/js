//This
//Para acceder/referencia a los atributos del objeto
const reservacion = { //declarando un objeto
    nombre: 'Tae',
    apellido: 'Kim',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`);
    }
}

reservacion.informacion();//llamando a la FUNCION del obejto RESERVACION


// Eemplo para entrevista de trabajo
//No esta imprimiendo nada por que la parte de la funcion hace referencia a windows (consola)
const reservacion = {
    nombre: 'Tae',
    informacion: () => {
        console.log(`${this.nombre}`);
    }
}