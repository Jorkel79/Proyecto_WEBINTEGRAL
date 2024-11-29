
const apiUrl = 'http://localhost:3000/passwords'; // URL de tu API

// Obtener referencias a los elementos HTML
const generateButton = document.getElementById('generatePassword');
const passwordOutput = document.getElementById('passwordOutput');

// Función para generar la contraseña
const generatePassword = async () => {
    // Obtener los valores de los inputs
    const minLength = document.getElementById('minLength').value;
    const maxLength = document.getElementById('maxLength').value;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;

    // Crear el objeto de datos a enviar
    const data = {
        minLength: parseInt(minLength),
        maxLength: parseInt(maxLength),
        includeNumbers: includeNumbers,
        includeUppercase: includeUppercase,
        includeSpecial: includeSpecial
    };

    // Realizar la solicitud POST al backend
    try {
        const response = await fetch(`${apiUrl}/generate`, {  // Asegúrate de que la URL esté correcta
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            passwordOutput.textContent = result.password;  // Mostrar la contraseña generada
        } else {
            throw new Error('Error al generar la contraseña');
        }
    } catch (error) {
        console.error('Error:', error);
        passwordOutput.textContent = 'Error generando la contraseña';  // Mostrar error en caso de fallo
    }
};


// Asignar el evento de clic al botón de generar
generateButton.addEventListener('click', generatePassword);
