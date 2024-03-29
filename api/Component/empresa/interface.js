const express = require('express')
const controller = require('./controller')
const response = require('../../Network/response')

const routes = express.Router()

routes.post('/', function(req, res){
    controller.agregarEmpresa( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 400) )
})


routes.get('/', function(req, res){
    // const filtro = req.body || null  // Consulta mediante el Cuerpo body
    const filtro = req.body || null // Consulta por query ejemplo ?usuario:"jnaulas" query
    controller.obtenerEmpresa( filtro )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 400) )
})

routes.put('/', function(req, res){
    controller.actualizarEmpresa( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 400) )
})

routes.delete('/', function(req, res){
    controller.eliminarEmpresa( req.query )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 400) )
})

module.exports = routes