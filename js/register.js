
console.log("register.js se está cargando correctamente.");
document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Previene el envío del formulario por defecto

    // Obtén los valores de los campos del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const correo = document.getElementById('correo').value;

    // Pregunta al usuario si desea validar el registro
    const deseaValidar = confirm("¿Desea validar su registro?");

    // Define el valor de validación en función de la respuesta del usuario
    const validacion = deseaValidar ? "SI" : "NO";

    //Realizar la solicitud POST al servidor
    try {
        console.log("Intentando conectar con el servidor Node.js...");
        const response = await fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, correo, validacion }),
        });

        const data = await response.json();

        // Manejar la respuesta del servidor
        if (response.ok) { // Verifica si la respuesta fue exitosa
            alert("Registro Exitoso, Ya Puede Iniciar Sesion!");
            console.log("Redireccionando a login.php...");
            //redirigir al login
            window.location.replace('http://localhost/Proyecto_WEBINTEGRAL/login.html');
        } else {
            alert(data.message); // Muestra el mensaje de error del servidor
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al registrarse.');
    }
});