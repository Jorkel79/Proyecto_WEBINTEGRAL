const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

//Servicios:
    //Login, register

//Ruta de login
router.post('/login', usersController.login)

//Ruta de registro
router.post('/register', usersController.register)

module.exports = router;