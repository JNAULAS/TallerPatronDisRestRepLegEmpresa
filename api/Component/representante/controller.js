const storage = require('./storage')

function obtenerRepresentante( filtro_representantelegal ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_representantelegal) )
    })
}

function agregarRepresentante( representantelegal ) {
    return new Promise((resolve, reject) => {
        if (!representantelegal.ruc) {
            return reject('No hay datos suficientes.')
        }
        storage.add( representantelegal )
        resolve( representantelegal )        
    })
}

function actualizarRepresentante( representantelegal ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update( representantelegal )
        if (resultado) {
            return resolve( representantelegal )
        } else {
            return reject('No existe el representantelegal.')
        }
    })
}


function eliminarRepresentante( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.delete( dato ) )
    })    
}

module.exports = {
    agregarRepresentante,
    obtenerRepresentante,
    actualizarRepresentante,
    eliminarRepresentante
}