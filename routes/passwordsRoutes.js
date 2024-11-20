const express = require('express');
const router = express.Router();
const db = require('../models/database'); // Conexión a la base de datos

// Obtener todas las contraseñas
router.get('/', (req, res) => {
    const query = 'SELECT * FROM contraseñas';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Agregar una nueva contraseña
router.post('/', (req, res) => {
    const { username, contraseña, aplicacion } = req.body;
    const query = 'INSERT INTO contraseñas (username, contraseña, aplicacion) VALUES (?, ?, ?)';
    db.query(query, [username, contraseña, aplicacion], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true, id: results.insertId });
    });
});

// Actualizar una contraseña
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { username, contraseña, aplicacion } = req.body;
    const query = 'UPDATE contraseñas SET username = ?, contraseña = ?, aplicacion = ? WHERE id = ?';
    db.query(query, [username, contraseña, aplicacion, id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

// Eliminar una contraseña
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM contraseñas WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

module.exports = router;
