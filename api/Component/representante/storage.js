const Model = require('./model')

async function agregarRepresentante( dato ) {
    const resultado = await new Model( dato )
    return resultado.save()
}


async function obtenerRepresentante( filtro ) {
    let mi_filtro = {}

    if (filtro.ruc != null) {
        mi_filtro = { ruc: filtro.ruc }
    }
    const resultado = await Model.find( mi_filtro )
    return resultado
}

async function actualizarRepresentante(dato) {
    const nuevo_objeto = await Model.findOne( { ruc: dato.ruc } )

    nuevo_objeto.nombre = dato.nombre
    nuevo_objeto.apellido = dato.apellido
    nuevo_objeto.email = dato.email
    nuevo_objeto.domicilio = dato.domicilio
    nuevo_objeto.telefono = dato.telefono
    
    const resultado = await nuevo_objeto.save()
    return resultado
}

async function eliminarRepresentante(dato) {
    const resultado = await Model.deleteOne( {ruc: dato.ruc} )
    return resultado
}

module.exports = {
    agregar:agregarRepresentante,
    obtener:obtenerRepresentante,
    actualizar:actualizarRepresentante,
    eliminar:eliminarRepresentante
}