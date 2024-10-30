
function generatePassword() {
    const minLength = parseInt(document.getElementById('minLength').value);
    const maxLength = parseInt(document.getElementById('maxLength').value);
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;

// Los caracteres que podemos usar en la contraseña
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeSpecial) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    //El randomizador para la contraseña
    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Para que aparezca en el div
    document.getElementById('passwordOutput').textContent = password;
}
