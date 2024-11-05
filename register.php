<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/register.css">
</head>
<body>
    <section class="left-form">
        <form action="" id="registerForm" method="POST">
            <img src="css/secupasslogo.png" alt="Logo" class="mobile-logo">

            <h1>SECUPASS</h1>

            <h2>Register</h2>

            <label for="user">Username</label>
            <input type="text" name="username" id="username" required>

            <label for="pwd">Password</label>
            <input type="password" name="password" id="password" required>

            <label for="pwd">Correo</label>
            <input type="email" name="correo" id="correo" required>

            <div class="check">
                <a href="./login.php">Iniciar Sesion</a></li>
            </div>
            <input type="submit" value="Registrar" name="entrar">
        </form>
    </section>
    <section class="right-form">
    </section>

    <script src="js/register.js?v=1"></script>

</body>

</html>