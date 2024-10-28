const connection = require('../models/database');
const db = require('../models/database');

//LOGIN
exports.login = (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM `usuarios` WHERE username =? AND password =?;';

    // Verificar las credenciales de un usuario y responde en consecuencia.
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).json({ message: "Error en el servidor" });
        }
        console.log('Resultados de la consulta:', results); // Esto te ayudará a ver qué está devolviendo la base de datos
        if (results.length > 0) {
            res.json({ message: "Login Exitoso", data: results });
        } else {
            res.status(401).json({ message: "Usuario o contraseña incorrectos", data: [] });
        }
    });
}


//REGISTRO
exports.register = (req, res) => {
    const { username, password, correo, validacion } = req.body

    const query = 'INSERT INTO `usuarios` (username, password, correo, validacion) VALUES (?,?,?,?);'

    //Crear un nuevo usuario y responde en consecuencia.
    db.query(query, [username, password, correo, validacion], (err, results) => {
        if (err) throw err;
        res.json({
            message: "Registro Exitoso",
            data: results
        })
    })
}