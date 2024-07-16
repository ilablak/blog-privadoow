async function main() {
    //manejar los  parametros de la URL para autentacion 
    const queryParametros = new URLSearchParams(window.location.search);
    const username = queryParametros.get('username');
    const password = queryParametros.get('password');

    localStorage.clear();

    // ruta al archivo JSON
    const response = await fetch('users.json')
    if (!response.ok) {
        throw new Error('Error al carga el archivo JSON');
    }

    //Verificamos si el usaurio y la contraseña existen en los datos del JSON
    const datos = await response.json()
    for (const usuario of datos) {
        if (usuario.usuario === username && usuario.contraseña === password) {
            localStorage.setItem('estaAutenticado', 'true');
            window.location.href = 'articles.html';
        }
    }
    // usuario no encontrado
    localStorage.removeItem('estaAutenticado');
    window.location.href = 'login.html';

     const usuarioEncontrado = datos.find(
         usuario => usuario.usuario === username && usuario.contraseña === password
     );

     if (usuarioEncontrado) {
         localStorage.setItem('estaAutenticado', 'true');
         window.location.href = 'articles.html';

     } else {
         localStorage.removeItem('estaAutenticado');
         window.location.href = 'login.html';
     }
}

// Llamar a la función para que se ejecute cuando se carga la página
document.addEventListener('DOMContentLoaded', main);
