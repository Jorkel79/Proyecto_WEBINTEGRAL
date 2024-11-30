<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirigiendo...</title>
    <style>
        /* Estilo global de la página */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f8ff; /* Color de fondo suave */
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            flex-direction: column;
        }

        /* Animación de desvanecimiento para el texto */
        h1 {
            font-size: 2rem;
            color:blueviolet; 
            animation: fadeIn 2s ease-in-out;
            margin-bottom: 20px;
        }

        /* Efecto de animación para el mensaje */
        .message {
            font-size: 1.2rem;
            color:chocolate; 
            font-weight: bold;
            animation: pulse 1.5s infinite;
        }

        /* Animación de desvanecimiento */
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        /* Animación de pulsado */
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

        /* Estilo del contenedor */
        .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation: slideUp 1s ease-in-out;
        }

        /* Animación de deslizamiento hacia arriba */
        @keyframes slideUp {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
    </style>
    <script>
        // Redirige después de 3 segundos
        setTimeout(() => {
            window.location.href = "login.html";  // URL de destino
        }, 6000); // 3000 ms = 3 segundos
    </script>
</head>
<body>
    <div class="container">
        <h1>Abriendo SECUPASS</h1>
        <p class="message">Espera un momento por favor...</p>
    </div>
</body>
</html>
