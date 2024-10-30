//configurar express
const express = require('express');

//configurar bodyParser
const bodyParser = require('body-parser');

//configurar cors
const cors = require('cors');

//importar el archivo
const usersRoutes = require('./routes/usersRoutes');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar CORS para permitir conexiones desde cualquier origen
app.use(cors());

//middlewares
app.use(bodyParser.json());//se establece el formato de los datos

//agregar al middleware el objeto
app.use('/users', usersRoutes);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
});