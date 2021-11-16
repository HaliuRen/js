//SPREAD OPERATOR

const producto = {
    nombre: 'Laptop HP',//porpiedad
    precio: 15000,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medidas: '1m'
}

//concatenar dos objetos

const nuevoProducto = { ...producto, ...medidas};

console.log(nuevoProducto);