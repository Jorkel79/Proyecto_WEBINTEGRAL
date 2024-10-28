document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    // Obtener los datos de entrada
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        // Enviar solicitud de login
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            alert("Login Exitoso, Bienvenido!");
        } else if (response.status === 401) {
            alert("Usuario o contraseña incorrectos");
        } else {
            alert("Hubo un problema con la solicitud");
        }
    } catch (error) {
        console.error("Error de red", error);
        alert("Hubo un problema con la solicitud");
    }
});