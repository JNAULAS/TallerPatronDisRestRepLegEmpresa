const representante = require('../Component/representante/interface')

const routes = function( server ) {
    server.use('/representante', representante)
}

module.exports = routes