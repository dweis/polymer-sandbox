'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'polymersandbox' };
        
        res.render('index', model);
        
    });

};
