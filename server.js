//configurar express
const express = require('express');

//configurar bodyParser
const bodyParser = require('body-parser');

//importar el archivo


const app = express();

//middlewares
app.use(bodyParser.json());//se establece el formato de los datos

//agregar añ middleware el objeto


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
});