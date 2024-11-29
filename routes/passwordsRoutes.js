const express = require('express');
const router = express.Router();
const passwordsController = require('../controllers/passwordsController'); // Importar el controlador

// Rutas para contraseñas
router.get('/', passwordsController.getAllPasswords);
router.post('/', passwordsController.createPassword);
router.post('/', passwordsController.addPassword);
router.put('/:id', passwordsController.updatePassword);
router.delete('/:id', passwordsController.deletePassword);

module.exports = router;
