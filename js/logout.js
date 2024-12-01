
console.log("Logout.js se está cargando correctamente.");

const logout = async () => {
    try {
        // Realizar una solicitud al backend para hacer logout
        const response = await fetch('http://localhost:3000/users/logout', { // Cambiado a /users/logout
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Verificar si la respuesta es exitosa
        if (response.ok) {
            const data = await response.json();

            if (data.message === "Cierre de Sesion Exitoso") { // Verifica el mensaje exacto del backend
                // Eliminar el token del localStorage
                localStorage.removeItem('token'); // O sessionStorage.removeItem('token');

                // Redirigir al login
                console.log("Cierre de sesión exitoso, redirigiendo al login...");
                window.location.href = 'http://localhost/Proyecto_WEBINTEGRAL/login.html';
            } else {
                console.log("Error en el mensaje de cierre de sesión:", data.message);
            }
        } else {
            console.log("Error al procesar la solicitud de logout:", response.status);
        }
    } catch (error) {
        console.log("Error al cerrar sesión", error);
    }
};

// Asociar el logout a un botón
const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
    logoutButton.addEventListener("click", logout);
} else {
    console.error("No se encontró un botón con el id 'logoutButton' en el DOM.");
}
