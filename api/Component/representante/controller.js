const storage = require('./storage')

function obtenerRepresentante( filtro_representantelegal ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro_representantelegal) )
    })
}

function agregarRepresentante( representantelegal ) {
    return new Promise((resolve, reject) => {
        if (!representantelegal.ruc) {
            return reject('No hay datos suficientes.')
        }
        storage.agregar( representantelegal )
        resolve( representantelegal )        
    })
}

function actualizarRepresentante( representantelegal ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.actualizar( representantelegal )
        if (resultado) {
            return resolve( representantelegal )
        } else {
            return reject('No existe el representantelegal.')
        }
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