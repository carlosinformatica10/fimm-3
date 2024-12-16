// Función para un carrusel de imágenes automático
function iniciarCarrusel() {
    const imagenes = document.querySelectorAll('.carrusel img');
    let indiceActual = 0;

    setInterval(() => {
        // Ocultar la imagen actual
        imagenes[indiceActual].classList.remove('activo');
        // Calcular el siguiente índice
        indiceActual = (indiceActual + 1) % imagenes.length;
        // Mostrar la siguiente imagen
        imagenes[indiceActual].classList.add('activo');
    }, 3000); // Cambia cada 3 segundos
}

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.carrusel')) {
        iniciarCarrusel();
    }
});



