
// Configurar Express
const express = require('express');

// Configurar bodyParser
const bodyParser = require('body-parser');

// Configurar CORS
const cors = require('cors');

// Importar las rutas
const usersRoutes = require('./routes/usersRoutes');
const passwordsRoutes = require('./routes/passwordsRoutes');

// Importar middleware de autenticación
const authMiddleware = require('./js/authMiddleware');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar CORS para permitir conexiones desde cualquier origen
app.use(cors());

// Middleware para analizar datos JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Procesar datos de formularios

// Middleware para registrar las solicitudes entrantes (útil para depuración)
app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
});

// Rutas de la API
app.use('/users', usersRoutes);
app.use('/passwords', passwordsRoutes);

// Ruta protegida de ejemplo usando el middleware de autenticación
app.get('/perfil', authMiddleware, (req, res) => {
    res.json({ message: 'Acceso autorizado, datos del perfil aquí.' });
});

// Ruta para servir index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Asegúrate de que index.html esté en la raíz
});

// Ruta para servir login.html
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html'); // Asegúrate de que login.html esté en la raíz
});

// Ruta para manejar el login (POST) bajo /users/login
// Nota: Esta funcionalidad debería manejarse exclusivamente en el controlador.
app.post('/users/login', (req, res) => {
    const { username, password } = req.body;

    // Aquí puedes hacer la validación del usuario (ej., consulta a base de datos)
    if (username === 'usuario' && password === 'contraseña') {
        res.send('Login exitoso');
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
});

// Ruta para manejar el logout (si se necesita en server.js directamente)
app.post('/users/logout', (req, res) => {
    res.json({ message: "Cierre de Sesión Exitoso" });
});

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// Configurar el puerto y escuchar
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
