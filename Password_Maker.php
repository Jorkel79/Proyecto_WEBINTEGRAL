<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Generador de Contraseñas</title>

    <link rel="icon" href="logo.jpg" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/GeneradorPassword.css?v=1.1" rel="stylesheet">

    <script src="js/Password_Maker.js"></script>

</head>

<body>
    <header>
        <img src="css/secupasslogo.png" alt="Logo">
        <h1>Generador de Contraseñas</h1>
        <div class="header-buttons">
            <a href="#">Inicio</a>
            <a href="#" class="exit-button">Salir</a>
        </div>

    </header>

    <main>
        <div class="password-generator">
            <h2>Genera una Contraseña Segura</h2>

            <div class="container">
                <div>
                    <!-- El largo para la contraseña -->
                    <label for="minLength">Longitud mínima:</label>
                    <input type="number" id="minLength" min="4" max="20" value="8">

                    <label for="maxLength">Longitud máxima:</label>
                    <input type="number" id="maxLength" min="4" max="20" value="12">
                </div>

                <!-- Las categorias para la contraseña -->
                <label>
                    <input type="checkbox" id="includeNumbers"> ¿Con números?
                </label>
                <br>
                <label>
                    <input type="checkbox" id="includeUppercase"> ¿Con mayúsculas?
                </label>
                <br>
                <label>
                    <input type="checkbox" id="includeSpecial"> ¿Con caracteres especiales?
                </label>
            </div>

            <button class="btn btn-primary" onclick="generatePassword()">Generar Contraseña</button>

            <!-- La contraseña -->
            <div class="output" id="passwordOutput">Contraseña</div>

        </div>

    </main>

    <footer>
        <p>&copy; 2024 Generador de Contraseñas</p>
        <p><a href="#">Términos y condiciones</a> | <a href="#">Política de privacidad</a></p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>