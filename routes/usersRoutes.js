const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const verificarToken = require('../js/authMiddleware');

//Servicios:
//Login, register

//Ruta de login
router.post('/login', usersController.login)

//Ruta de registro
router.post('/register', usersController.register)

//Ruta de logout
router.post('/logout', usersController.logout);

// Ruta protegida (ejemplo, requiere autenticación)
router.get('/perfil', verificarToken, (req, res) => {
    // Si el token es válido, podemos responder con datos del usuario
    res.json({
        message: 'Bienvenido a tu perfil.',
        user: req.user,  // Aquí los datos del usuario autenticado
    });
});

module.exports = router;