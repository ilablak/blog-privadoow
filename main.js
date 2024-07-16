function controlarBotonHabilitado(event) {
    const checked = event.target.checked
    const login = document.getElementById('login')
    login.disabled = !checked
}

function main() {
    // //Verificar se el usuario ya esta autenticado(verificado)
    if (localStorage.getItem('estaAutenticado') === 'true') {
        window.location.href = 'articles.html'
    };

    const checkbox = document.getElementById('checkboxSesion');
    checkbox.addEventListener('change', controlarBotonHabilitado)
}

// Llamar a la función para que se ejecute cuando se carga la página
document.addEventListener('DOMContentLoaded', main);
