const connection = require('../models/database');
const db = require('../models/database');
const bcryptjs = require('bcryptjs');
//LOGIN
exports.login = async (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM `usuarios` WHERE username =?;';

    //Verificar las credenciales de un usuario y responde en consecuencia.
    db.query(query, [username], async (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).json({ message: "Error en el servidor" });
        }
        console.log('Resultados de la consulta:', results); //Esto te ayudará a ver qué está devolviendo la base de datos
        if (results.length > 0) {

            const user = results[0];//Recuperar los datos del usuario para comparar las contraseñas
            const esIgual = bcryptjs.compareSync(password, user.password); // Comparar contraseñas

            if (esIgual) {
                console.log("Usuario autenticado correctamente.");
                res.json({ message: "Login Exitoso", data: results });
                // Generar un token aquí
            } else {
                console.log("Contraseña incorrecta.");
                res.json({ message: "Usuario o contraseña incorrectos", data: [] });
            }
        } else {
            res.status(401).json({ message: "Usuario o contraseña incorrectos", data: [] });
        }
    });
}


//REGISTRO
exports.register = async (req, res) => {
    const { username, password, correo, validacion } = req.body;

    //Encriptar la contraseña antes de almacenarla en la base de datos
    const passSecret = await bcryptjs.hash(password, 10);

    const query = 'INSERT INTO `usuarios` (username, password, correo, validacion) VALUES (?,?,?,?);';

    //Crear un nuevo usuario y responder en consecuencia
    db.query(query, [username, passSecret, correo, validacion], (err, results) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                //Si ocurre un error de duplicación, verificar si es por el username o el correo
                if (err.sqlMessage.includes('username')) {
                    return res.status(400).json({ message: "El nombre de usuario ya está en uso, elige otro." });
                } else if (err.sqlMessage.includes('correo')) {
                    return res.status(400).json({ message: "El correo ya está registrado, utiliza otro correo o inicia sesión." });
                }
            }
            //Si es otro tipo de error, manejarlo de forma genérica
            console.error('Error en la consulta:', err);
            return res.status(500).json({ message: "Error en el servidor" });
        }

        //Si no hay errores, enviar mensaje de éxito
        res.json({
            message: "Registro Exitoso",
            data: results
        });
    });
}