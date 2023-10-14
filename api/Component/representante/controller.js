const storage = require('./storage')

function agregarRepresentante( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerRepresentante( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

function actualizarRepresentante( dato ) {
    return new Promise((resolve, reject) => {
        let representante = {
            nombre: representante.nombre,
            apellido: representante.apellido,
            email: representante.email,
            domicilio: representante.domicilio,
            telefono: representante.telefono,
        }
        resolve( storage.actualizar( representante ) )
    })
}

function eliminarRepresentante( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminar( dato ) )
    })    
}

module.exports = {
    agregarRepresentante,
    obtenerRepresentante,
    actualizarRepresentante,
    eliminarRepresentante
}