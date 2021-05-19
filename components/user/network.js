const router = require('express').Router();
const response = require('../../network/response');

const controller = require('./controller');

router.get('/', function(req, res){
    
    controller.list()
    .then((users) =>{

        response.success(req, res, users, 'Lista de usuarios');
    })
    .catch(error =>{
        response.error(req, res, error, 'No se pudo obtener la lista');
    });

});

module.exports = router;