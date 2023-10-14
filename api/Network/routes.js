const empresa = require('../Component/empresa/interface')
const representante = require('../Component/representante/interface')

const routes = function( server ) {
    server.use('/empresa', empresa)
    server.use('/representante', representante)
}

module.exports = routes