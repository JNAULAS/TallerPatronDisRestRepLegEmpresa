const Model = require('./model')

function obtenerRepresentante(paramRuc) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (paramRuc) {
            filtro = { ruc: paramRuc }
        }
        Model.find(filtro)
            .populate({
                path: 'empresa',
                populate: {
                    path: 'empresa',
                    model: 'empresa'
                }
            })
            .exec()
            .then(data => {
                console.log('Datos retornados')
                console.log(data)
                lista = []
                for (let elemento of data) {
                    objeto = {
                        id: elemento._id,
                        ruc: elemento.ruc,
                        cedula: elemento.cedula,
                        nombre: elemento.nombre,
                        apellido: elemento.apellido,
                        email: elemento.email,
                        domicilio: elemento.domicilio,
                        telefono: elemento.telefono
                    }
                    objeto.empresas = []
                    for (let detalle of elemento.empresa) {
                        registro = {
                            nombre: detalle.empresa.nombre,
                            ruc: detalle.empresa.ruc
                        }
                        objeto.empresas.push(registro)
                    }
                    lista.push(objeto)
                }
                /* if (error)
                    reject(error)
                else*/
                resolve(lista)
            })
    })
}

function agregarRepresentante(representantelegal) {

    const objeto = new Model(representantelegal)
    objeto.save()
}

async function actualizarRepresentante(representantelegal) {
    const objeto = await Model.findOne({ ruc: representantelegal.ruc })

    if (objeto) {
        objeto.estado = False
        return resultado = await objeto.save()
    } else {
        return null
    }
}

async function eliminarRepresentante(representantelegal) {
    return await Model.deleteOne({ ruc: representantelegal.ruc })
}

module.exports = {
    agregar: agregarRepresentante,
    obtener: obtenerRepresentante,
    actualizar: actualizarRepresentante,
    eliminar: eliminarRepresentante
}