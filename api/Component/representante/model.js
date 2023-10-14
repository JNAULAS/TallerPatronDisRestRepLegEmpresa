const mongoose = require('mongoose')
const Schema = mongoose.Schema

const representante_schema = new Schema({
    ruc: String,
    cedula: String,
    nombre: String,
    apellido: String,
    email: String,
    domicilio: String,
    telefono: String,
}) 

const model = mongoose.model('representante', representante_schema)
module.exports = model