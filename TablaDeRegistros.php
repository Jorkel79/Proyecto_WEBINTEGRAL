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
    <h1>Perfil De Usuario</h1>
    <div class="header-buttons">
      <a href="#" class="exit-button" title="Cerrar sesion">
        <img src="css/CerrarSesion.png" alt="Botón de salir">
      </a>
    </div>
  </header>
<div class="table-container">
    <button onclick="location.href='GenerarPassword.php'" id="add-button" class="btn btn-add"><i class="fas fa-plus"></i> Añadir Contraseña</button>
    <table class="styled-table">
        <thead>
            <tr>
                <th>Aplicacion</th>
                <th>Contraseña</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="table-body">
            <!-- Aquí las filas serán generadas dinámicamente con JavaScript -->
        </tbody>
    </table>
</div>

<!-- Footer -->
<footer>
    <p>&copy; 2024 Generador de Contraseñas</p>
    <p><a href="#">Términos y condiciones</a> | <a href="#">Política de privacidad</a></p>
</footer>

<!-- Enlace al archivo JavaScript -->
<script src="./js/crud.js" defer></script>
</body>
</html>
