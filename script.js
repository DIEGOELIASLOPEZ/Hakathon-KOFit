
/*SECCION DE ALERTA DE PLANES Y PRECIOS */
document.addEventListener('DOMContentLoaded', function () {
    // 1. Seleccionar todos los botones de planes
    const botonesPlan = document.querySelectorAll('.btn-plan, .btn-plan-destacado');
    // 2. Agregar evento a cada botón
    botonesPlan.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que el enlace navegue
            // Mostrar alerta
            alert('Lo sentimos, esta opción no está disponible por el momento.\n\nEstamos trabajando para ofrecerte este servicio pronto.');
        });
    });
});