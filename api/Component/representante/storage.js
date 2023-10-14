const Model = require('./model')

function obtenerRepresentante( filtro_representantelegal ) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtro_representantelegal) {
            filtro = { ruc: filtro_representantelegal }
        }
        Model.find( filtro ) 
            .populate({
                path:'empresa',
            })

            .exec()
            .then(data => { 
                lista = []
                for (let elemento of data) {
                    objeto = { 
                        ruc:elemento.ruc,
                        nombre:elemento.nombre,
                        apellido:elemento.apellido,
                        email:elemento.email,
                        domicilio:elemento.domicilio,
                        telefono:elemento.telefono, 
                    }
                    objeto.detalles = []
                    for (let detalle of elemento.empresa) {
                        registro = { 
                            rucEmpresa: detalle.ruc,
                            nombreEmpresa:detalle.nombre,
                            domicilioEmpresa:detalle.domicilio,
                            telefonoEmpresa:detalle.telefono, 
                        }
                        objeto.detalles.push( registro )
                    }
                    lista.push( objeto )
                }
                resolve(lista)
                }) 
                .catch(error => {
                    reject(error)
                  });   
    }) 
}

function agregarRepresentante( representantelegal ) { 

    const objeto = new Model( representantelegal )
    objeto.save()
}

async function actualizarRepresentante( representantelegal ) {
    const objeto = await Model.findOne( {ruc: representantelegal.ruc} )

    if ( objeto ) {
        objeto.estado = False
        return resultado = await objeto.save()
    } else {
        return null
    }
}

async function eliminarRepresentante( representantelegal ) {
    return await Model.deleteOne({ruc: representantelegal.ruc})
}

module.exports = {
    agregar:agregarRepresentante,
    obtener:obtenerRepresentante,
    actualizar:actualizarRepresentante,
    eliminar:eliminarRepresentante
}