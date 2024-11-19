<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla con Fondo</title>
    <link rel="stylesheet" href="./css/tabla.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
<header>
    <img src="css/secupasslogo.png" alt="Logo">
    <h1>Contraseñas Creadas</h1>
    <div class="header-buttons">
        <a href="./GenerarPassword.php">Inicio</a>
        <a href="#" class="exit-button">Salir</a>
    </div>
</header>
<div class="table-container">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Aplicacion</th>
                <th>Contraseña</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Fila 1, Celda 1</td>
                <td>Fila 1, Celda 2</td>
                <td>
                    <button class="btn btn-edit"><i class="fas fa-edit"></i> Editar</button>
                    <button class="btn btn-delete"><i class="fas fa-trash-alt"></i> Eliminar</button>
                </td>
            </tr>
            <tr>
                <td>Fila 2, Celda 1</td>
                <td>Fila 2, Celda 2</td>
                <td>
                    <button class="btn btn-edit"><i class="fas fa-edit"></i> Editar</button>
                    <button class="btn btn-delete"><i class="fas fa-trash-alt"></i> Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!-- Footer -->
<footer>
    <p>&copy; 2024 Generador de Contraseñas</p>
    <p><a href="#">Términos y condiciones</a> | <a href="#">Política de privacidad</a></p>
</footer>
</body>
</html>



