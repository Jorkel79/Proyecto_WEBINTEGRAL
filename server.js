// Configurar Express
const express = require('express');

// Configurar bodyParser
const bodyParser = require('body-parser');

// Configurar CORS
const cors = require('cors');

// Importar las rutas
const usersRoutes = require('./routes/usersRoutes');
const passwordsRoutes = require('./routes/passwordsRoutes');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar CORS para permitir conexiones desde cualquier origen
app.use(cors());

// Middleware para analizar datos JSON
app.use(bodyParser.json());

// Configurar rutas específicas
app.use('/users', usersRoutes);
app.use('/passwords', passwordsRoutes);

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Asegúrate de que index.html está en la raíz del proyecto
});

// Ruta para servir login.html
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html'); // Asegúrate de que login.html está en la raíz del proyecto
});

// Configurar el puerto y escuchar
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
