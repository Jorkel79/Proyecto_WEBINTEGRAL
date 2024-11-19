const mysql = require('mysql2');//Instalar el modulo de MySql2

//Configuracion de la conexion
//host, username, password, db

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'secupass'
})

//Conectar a la base de datos
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
})

module.exports = connection;