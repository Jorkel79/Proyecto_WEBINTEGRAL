const express = require('express');
const router = express.Router();
const passwordsController = require('../controllers/passwordsController');

// Ruta para agregar una contraseña
router.post('/', passwordsController.addPassword);

// Las demás rutas para actualizar, eliminar, etc.
router.get('/', passwordsController.getAllPasswords);
router.put('/:id', passwordsController.updatePassword);
router.delete('/:id', passwordsController.deletePassword);

module.exports = router;
