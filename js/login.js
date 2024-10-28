document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Previene el envío del formulario por defecto

    // Obtén los valores de los campos del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Realiza la solicitud POST al servidor
    try {
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        // Manejar la respuesta del servidor
        if (response.ok) { // Verifica si la respuesta fue exitosa
            alert("Login Exitoso, Bienvenido!");
            // Redirigir o realizar otras acciones
        } else {
            alert(data.message); // Muestra el mensaje de error del servidor
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al intentar iniciar sesión.');
    }
});