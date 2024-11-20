const apiUrl = 'http://localhost:3000/passwords'; // URL de tu API

// Configurar el botón de añadir
document.getElementById('add-button').addEventListener('click', addRow);

// Cargar los datos desde la API y llenar la tabla
async function loadTable() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const tbody = document.getElementById('table-body');
        tbody.innerHTML = ''; // Limpia la tabla antes de llenarla

        data.forEach(row => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${row.aplicacion}</td>
                <td>${row.contraseña}</td>
                <td>
                    <button class="btn btn-edit" onclick="editRow(${row.id}, '${row.aplicacion}', '${row.contraseña}')">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button class="btn btn-delete" onclick="deleteRow(${row.id})">
                        <i class="fas fa-trash-alt"></i> Eliminar
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error al cargar la tabla:', error);
    }
}

// Agregar una nueva contraseña
async function addRow() {
    const aplicacion = prompt('Nombre de la aplicación:');
    const contraseña = prompt('Contraseña:');
    const username = prompt('Usuario:');

    if (!aplicacion || !contraseña || !username) return alert('Todos los campos son obligatorios');

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ aplicacion, contraseña, username })
        });

        if (response.ok) {
            alert('Contraseña agregada correctamente');
            loadTable();
        } else {
            alert('Error al agregar la contraseña');
        }
    } catch (error) {
        console.error('Error al agregar la contraseña:', error);
    }
}

// Editar una contraseña existente
async function editRow(id, currentApp, currentPass) {
    const aplicacion = prompt('Nuevo nombre de la aplicación:', currentApp);
    const contraseña = prompt('Nueva contraseña:', currentPass);

    if (!aplicacion || !contraseña) return alert('Todos los campos son obligatorios');

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ aplicacion, contraseña })
        });

        if (response.ok) {
            alert('Contraseña actualizada correctamente');
            loadTable();
        } else {
            alert('Error al actualizar la contraseña');
        }
    } catch (error) {
        console.error('Error al actualizar la contraseña:', error);
    }
}

// Eliminar una contraseña
async function deleteRow(id) {
    if (!confirm('¿Estás seguro de que deseas eliminar esta contraseña?')) return;

    try {
        const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });

        if (response.ok) {
            alert('Contraseña eliminada correctamente');
            loadTable();
        } else {
            alert('Error al eliminar la contraseña');
        }
    } catch (error) {
        console.error('Error al eliminar la contraseña:', error);
    }
}

// Inicializar la tabla al cargar la página
document.addEventListener('DOMContentLoaded', loadTable);
