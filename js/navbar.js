
document.getElementById('secciones-button').addEventListener('click', function() {
    var seccionesMenu = document.getElementById('secciones-menu');
    var body = document.querySelector('body');
    seccionesMenu.style.display = 'flex';
    seccionesMenu.style.justifyContent = 'space-between';

    setTimeout(function() {
        seccionesMenu.classList.add('show-menu');
    }, 0);

    //ocultar el contenido principal
    body.style.overflow = 'hidden';
});

document.getElementById('close-menu').addEventListener('click', function() {
    var seccionesMenu = document.getElementById('secciones-menu');
    var body = document.querySelector('body');

     // Ocultar el menú gradualmente
    seccionesMenu.classList.remove('show-menu');
    
    // Restaurar el scroll en el contenido principal después de la animación
    setTimeout(function() {
        seccionesMenu.style.display = 'none';
        body.style.overflow = 'auto';
    }, 300); // 300ms es la duración de la transición CSS
});

//desplazamiento cuando no se visualice la etiqueta header
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento header
    var header = document.querySelector("header");
    
    // Obtén el elemento secciones-menu
    var seccionesMenu = document.getElementById("secciones-menu");

    // Función para verificar el desplazamiento y aplicar el estilo
    function checkScroll() {
        // Obtén la altura del header
        var headerHeight = header.clientHeight;

        // Obtén la posición actual de desplazamiento
        var scrollPosition = window.scrollY || window.pageYOffset;

        // Verifica si el header ya no es visible
        if (scrollPosition > headerHeight) {
            // Aplica un nuevo estilo al secciones-menu
            seccionesMenu.style.marginTop = "10px"; // Ajusta según sea necesario
        } else {
            // Vuelve al estilo original si el header es visible
            seccionesMenu.style.marginTop = "23rem"; // Ajusta según sea necesario
        }
    }

    // Agrega un evento de desplazamiento para llamar a la función
    window.addEventListener("scroll", checkScroll);

    // Llama a la función una vez al cargar la página
    checkScroll();
});