
const logout = () => {
    // Eliminar el token de localStorage o sessionStorage
    localStorage.removeItem('token'); // O sessionStorage.removeItem('token');

    // Redirigir a la página de login o realizar cualquier otra acción
    window.location.href = '/login';
};

// Puedes agregar esto a un evento de clic en un botón de logout:
document.getElementById("logoutButton").addEventListener("click", logout);