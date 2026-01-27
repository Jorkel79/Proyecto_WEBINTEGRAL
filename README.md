# 🔐 SECUPASS – Gestor de Contraseñas (API CRUD)

SECUPASS es un sistema backend enfocado en la **gestión de contraseñas de aplicaciones**, permitiendo crear, consultar, actualizar y eliminar registros de forma estructurada mediante una **API REST**.

El proyecto fue diseñado con un enfoque práctico, priorizando la organización de datos sensibles y el uso correcto de una base de datos relacional.

---

## 🧠 Objetivo del proyecto

Muchos usuarios almacenan contraseñas:
- En notas
- En archivos inseguros
- Sin estructura ni control

**SECUPASS centraliza la información**, permitiendo:
- Asociar contraseñas a aplicaciones
- Mantener un orden por usuario
- Facilitar la gestión desde una API

---

## ⚙️ Tecnologías utilizadas

- JavaScript
- Node.js
- Express
- MySQL
- API REST
- Arquitectura CRUD

## 📦 Estructura del proyecto
---
SECUPASS/
├── controllers/
├── models/
│ └── database.js
├── routes/
├── index.js
├── package.json
└── README.md


---

## 🗄️ Base de datos

**MySQL**

Base de datos: `SECUPASS`

### Tabla principal: `contraseñas`

| Campo        | Tipo      |
|--------------|-----------|
| id           | INT (PK)  |
| contraseña   | VARCHAR   |
| username     | VARCHAR   |
| aplicacion   | VARCHAR   |

📌 El sistema interactúa **únicamente con esta tabla** para las operaciones CRUD.

---

## 🔄 Funcionalidades

- Crear nueva contraseña
- Consultar contraseñas registradas
- Actualizar registros existentes
- Eliminar contraseñas
- Conexión a base de datos mediante archivo dedicado (`database.js`)

---

## 🌐 API Endpoints

Ejemplo de endpoints:

``http
GET /passwords
POST /passwords
PUT /passwords/:id
DELETE /passwords/:id

## 👨‍💻 Autor

Desarrollado por Jorge Raúl Valencia Santos
Proyecto enfocado en el manejo estructurado de información sensible.
