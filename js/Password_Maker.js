
function generatePassword() {
    console.log("Generating password...");

    const minLength = parseInt(document.getElementById('minLength').value);
    const maxLength = parseInt(document.getElementById('maxLength').value);

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


    console.log(minLength, maxLength, includeNumbers, includeUppercase, includeSpecial);

    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeSpecial) characters += '¿?¡!-_.: *@$/';

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));

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



    // Muestra la contraseña generada en el div
    document.getElementById('passwordOutput').textContent = password;
    console.log("Password Generated:", password);
}

    // Mostrar el modal
    function showModal() {
        document.getElementById('usernameModal').style.display = 'block';  // Esto hace que el modal sea visible
    }
    
    // Cerrar el modal
    function closeModal() {
        document.getElementById('usernameModal').style.display = 'none';  // Esto hace que el modal desaparezca
    }

function savePassword() {
    const password = document.getElementById('passwordOutput').textContent;  // Tomamos la contraseña generada
    const appName = document.getElementById('appName').value;  // Tomamos el valor del campo "Aplicación"
    
    // Pedir el nombre de usuario mediante un prompt
    const username = prompt("Por seguridad, por favor escribe tu nombre de usuario:");

    // Verificar que se haya ingresado un nombre de usuario
    if (!username) {
        alert("El nombre de usuario es requerido.");
        return;
    }

    // Validar que la aplicación no esté vacía
    if (appName.trim() === '') {
        alert("Por favor, ingresa el nombre de la aplicación.");
        return;  // Detenemos la función si no se proporciona un nombre de aplicación
    }

    // Enviar los datos al servidor
    fetch('http://localhost:3000/passwords', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contraseña: password,
            username: username,  // Enviar el nombre de usuario ingresado
            aplicacion: appName,  // Enviar el nombre de la aplicación
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Contraseña guardada:", data);
        alert("Contraseña guardada con éxito");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al guardar la contraseña");
    });
}



// Asignar el evento de clic al botón de generar
generateButton.addEventListener('click', generatePassword);

