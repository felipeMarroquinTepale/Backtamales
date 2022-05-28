var express = require('express');
var router = express.Router();
const usersService = require('../controllers/usersService')



//route para el inicio de sesion del administrador
router.post('/userValidate',usersService.userValidate);

//route para el registro de datos del cliente
router.post('/registrarClient',usersService.registrarClient);


module.exports = router;