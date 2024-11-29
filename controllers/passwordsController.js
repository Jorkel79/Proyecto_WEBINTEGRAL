const db = require('../models/database'); // Conexión a la base de datos

// Obtener todas las contraseñas
const getAllPasswords = (req, res) => {
    const query = 'SELECT * FROM contraseñas';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

const createPassword = (req, res) => {
    const { minLength, maxLength, includeNumbers, includeUppercase, includeSpecial } = req.body;

    // Validación de datos
    if (!minLength || !maxLength || minLength < 4 || maxLength > 20 || minLength > maxLength) {
        return res.status(400).json({ error: 'Datos inválidos para la longitud de la contraseña' });
    }

    // Caracteres base
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeSpecial) characters += '¿?¡!-_.: *@$/';

    // Generación de la contraseña
    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Respuesta con la contraseña generada
    res.json({ password });
};


// Agregar una nueva contraseña
const addPassword = (req, res) => {
    const { username, contraseña, aplicacion } = req.body;
    const query = 'INSERT INTO contraseñas (username, contraseña, aplicacion) VALUES (?, ?, ?)';
    db.query(query, [username, contraseña, aplicacion], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true, id: results.insertId });
    });
};

// Actualizar una contraseña
const updatePassword = (req, res) => {
    const { id } = req.params;
    const { username, contraseña, aplicacion } = req.body;
    const query = 'UPDATE contraseñas SET username = ?, contraseña = ?, aplicacion = ? WHERE id = ?';
    db.query(query, [username, contraseña, aplicacion, id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
};

// Eliminar una contraseña
const deletePassword = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM contraseñas WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
};

module.exports = {
    getAllPasswords,
    addPassword,
    updatePassword,
    deletePassword,
    createPassword
};
