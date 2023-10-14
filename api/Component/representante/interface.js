const express = require('express')
const controller = require('./controller')
const response = require('../../Network/response')

const routes = express.Router()

routes.get('/', function(req, res) {
    const filtro_representantelegal = req.query.ruc || null
    controller.obtenerRepresentante( filtro_representantelegal )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

routes.post('/', function(req, res) {
    controller.agregarRepresentante( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 500) )
})

routes.patch('/', function(req, res) {
    controller.actualizarRepresentante( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

routes.delete('/', function(req, res) {
    controller.eliminarRepresentante( req.query )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

module.exports = routes