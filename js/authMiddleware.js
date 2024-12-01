
const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    // Obtenemos el token de la cabecera Authorization
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // Si no hay token, regresamos un error
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se encontró el token.' });
    }

    try {
        // Verificamos el token usando la clave secreta
        const usuarioVerificado = jwt.verify(token, 'contraseña_secreta');

        // Agregamos los datos del usuario al request
        req.user = usuarioVerificado;

        // Continuamos con la siguiente función de la cadena (la ruta)
        next();
    } catch (error) {
        // Si el token no es válido o expiró
        return res.status(401).json({ message: 'Token no válido o expirado.' });
    }
};

module.exports = verificarToken;
