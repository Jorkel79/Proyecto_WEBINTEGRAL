const connection = require('../models/database'); // Importamos la conexión a la base de datos

// Función para obtener todas las contraseñas
const getAllPasswords = (req, res) => {
    const query = 'SELECT * FROM contraseñas WHERE username = ?'; // Filtrar por usuario
    db.query(query, [req.query.username], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener las contraseñas' });
        }
        res.status(200).json(result);
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
    console.log("Datos recibidos:", req.body); // Verifica lo que se recibe

    const { contraseña, username, aplicacion } = req.body;

    // Validar que no falten datos
    if (!contraseña || !username || !aplicacion) {
        return res.status(400).json({ message: 'Faltan datos' }); // Responder con un mensaje claro
    }

    // Consulta SQL para insertar la contraseña
    const query = 'INSERT INTO contraseñas (contraseña, username, aplicacion) VALUES (?, ?, ?)';

    // Ejecutar la consulta con los parámetros recibidos
    connection.execute(query, [contraseña, username, aplicacion], (err, results) => {
        if (err) {
            console.error("Error al guardar la contraseña:", err); // Imprime el error
            return res.status(500).json({ message: 'Error al guardar la contraseña', error: err }); // Responder con error
        }

        res.status(200).json({ message: 'Contraseña guardada exitosamente', id: results.insertId }); // Responder con éxito
    });
};




// Función para actualizar una contraseña existente
const updatePassword = (req, res) => {
    const { id } = req.params;
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'Falta la nueva contraseña' });
    }

    const query = 'UPDATE contraseñas SET contraseña = ? WHERE id = ?';
    db.query(query, [password, id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al actualizar la contraseña' });
        }
        res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
    });
};

// Función para eliminar una contraseña
const deletePassword = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM contraseñas WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar la contraseña' });
        }
        res.status(200).json({ message: 'Contraseña eliminada exitosamente' });
    });
};

module.exports = {
    getAllPasswords,
    addPassword,
    updatePassword,
    deletePassword,
    createPassword
};
