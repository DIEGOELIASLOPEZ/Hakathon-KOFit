
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
const Productos = [
    {
        id: 1,
        name: "Maquina de Boxeo Musical",
        description: "Esta máquina de boxeo musical redefine el boxeo con 9 velocidades, 11 modos (incluyendo el golpe combinado P10) y 7 zonas de impacto (5 golpes directos + 2 uppercuts). . Al golpear objetivos iluminados, puedes seguir tu progreso de entrenamiento, mejorar tu velocidad de reacción y coordinación, y optimizar tus resultados",
        price: 1789.29,
        img: "./assets/Producto1.webp",
        tag: "",
        tagClass: "",
        rating: "★★★☆☆"
    },
    {
        id: 2,
        name: "Saco de Entrenamiento",
        description: "El saco de boxeo está hecho de alta calidad y cuero de PU y están hechos con una estructura multicapa, cada capa ha sido cuidadosamente diseñada. En el interior, cuenta con varias capas de acolchado de espuma que puede reducir eficazmente el impacto generado en el proceso de boxeo y proteger la muñeca y las articulaciones. Las hebillas de metal aseguran de forma segura los costal de boxeo a las cadenas de metal.",
        price: 1159.14,
        img: "./assets/Producto2.webp",
        tag: "",
        tagClass: "",
        rating: "★★★☆☆"
    },
    {
        id: 3,
        name: "Saco de Entrenamiento Everlast",
        description: "El saco de boxeo está hecho de alta calidad y cuero de PU y están hechos con una estructura multicapa, cada capa ha sido cuidadosamente diseñada. En el interior, cuenta con varias capas de acolchado de espuma que absorben los golpes para proteger tus manos de la abrasión. Las hebillas de metal aseguran de forma segura los costal de boxeo a las cadenas de metal.",
        price: 1994.14,
        img: "./assets/Producto3.webp",
        tag: "",
        tagClass: "",
        rating: "★★★★★"
    },
    {
        id: 4,
        name: "2 Manoplas de Box Unitalla",
        description: "Guantes de Boxeo Ideales para Practicas y Entrenamientos, de Cuero Sintetico y Costuras Reforzadas, Resistentes y Comodas (2 Piezas Incluidas)",
        price: 199.00,
        img: "./assets/Producto4.webp",
        tag: "",
        tagClass: "",
        rating: "★★☆☆☆"
    },
    {
        id: 5,
        name: "Pera de Boxeo con Base Ajustable",
        description: "Equipado con un resorte de acero al carbono 82B, este balón de boxeo regresa rápidamente a su posición original después de cada golpe, asegurando un entrenamiento fluido, dinámico y sin ruidos molestos. Ideal para mejorar reflejos y velocidad.",
        price: 1748.10,
        img: "./assets/Producto5.webp",
        tag: "",
        tagClass: "",
        rating: "★★★★☆"
    },
    {
        id: 6,
        name: "Soporte para Costal de Boxeo",
        description: "Gancho para saco de arena se puede plegar hacia un lado de la pared cuando no esté en uso, debe levantar el saco de boxeo y sacar el pasador de liberación rápida, girar la perilla de resorte un círculo y tirar hacia afuera para ajustar, lo que puede ahorrar Tienes mucho espacio",
        price: 1393.15,
        img: "./assets/Producto6.webp",
        tag: "",
        tagClass: "",
        rating: "★★★★☆"
    },
    {
        id: 7,
        name: "NIAWEA 6pzs Vendas de Boxeo, 5 Metros de Longitud",
        description: "Incluye cuatro vendajes de boxeo de 5 m x 5 cm (con cómodas presillas para el pulgar) . Estos vendajes proporcionan una amortiguación completa y soporte para la muñeca, absorben eficazmente los impactos y previenen lesiones deportivas.",
        price: 199.00,
        img: "./assets/Producto7.webp",
        tag: "",
        tagClass: "",
        rating: "★★★☆☆"
    },
    {
        id: 8,
        name: "Bluelander Guantes de Box, Protector Bucal Incluido",
        description: "Lleva tu entrenamiento a otro nivel con tus nuevos guantes de box, kickboxing, MMA, Muay Thai, y más, por su cuerpo de cuero sintético e interior de resistente espuma, protege tus manos, alinea tus muñecas y lanza un golpe adecuado y potente",
        price: 361.00,
        img: "./assets/Producto8.webp",
        tag: "",
        tagClass: "",
        rating: "★★★★☆"
    },
    {
        id: 9,
        name: "Everlast Boxing Gloves",
        description: "El panel de puño elevado y la espuma estilo férula proporcionan un apoyo de élite para evitar lesiones, lo que hace que estos guantes sean ideales para sesiones de entrenamiento intensas y MMA de mujer.",
        price: 815.62,
        img: "./assets/Producto9.webp",
        tag: "",
        tagClass: "",
        rating: "★★★★★"
    }
]

function createCarousel() {
    const container = document.getElementById("contenedor-prods")
    container.innerHTML = ""

    // Buscamos y limpiamos el contenedor de las bolitas una sola vez AQUÍ arriba
    const currentController = document.getElementById("contenedorControl")
    if (currentController) currentController.innerHTML = ""

    let currentItem = null
    let currentRow = null

    let controllers = 1
    let isActive = "active"

    Productos.slice(0, 6).forEach((producto, index) => {

        if (index % 3 === 0) {
            currentItem = document.createElement("div")
            currentItem.className = "carousel-item"

            if (index === 0) {
                currentItem.classList.add("active")
            }

            currentRow = document.createElement("div")
            currentRow.className = "row g-4";

            currentItem.appendChild(currentRow);
            container.appendChild(currentItem);

            // 💡 SOLUCIÓN 2: Usamos += para añadir el nuevo botón sin borrar el anterior
            if (currentController) {
                // Si es el primer botón lleva aria-current="true", si no, no lleva nada
                const ariaCurrent = isActive === "active" ? 'aria-current="true"' : '';
                
                currentController.innerHTML += `
                    <button type="button" data-bs-target="#carruselProductos" data-bs-slide-to="${controllers - 1}"
                        class="${isActive}" ${ariaCurrent} aria-label="Slide ${controllers}"></button>
                `;
            }
            
            controllers++;
            isActive = ""; // Las siguientes páginas ya no serán 'active'
        }

        // FABRICACIÓN DE LA TARJETA (Impecable)
        const columnaProducto = document.createElement("div");
        columnaProducto.className = "col-12 col-md-4";

        const badgeHTML = producto.tag
            ? `<span class="badge ${producto.tagClass} position-absolute top-0 end-0 m-2 text-uppercase font-monospace" style="font-size: 10px;">${producto.tag}</span>`
            : '';

        columnaProducto.innerHTML = `
          <div class="card bg-secondary bg-opacity-25 border-secondary h-100 text-white shadow">
            <div class="position-relative bg-white p-3 d-flex align-items-center justify-content-center" style="height: 220px;">
              ${badgeHTML}
              <img src="${producto.img}" class="img-fluid" loading="lazy" style="max-height: 100%;" alt="${producto.name}">
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title fs-6 fw-semibold mb-1">${producto.name}</h5>
                <div class="text-warning small mb-3">${producto.rating}</div>
                <p class="card-text fw-bold fs-4 mb-3">$${producto.price.toLocaleString('es-MX')}</p>
              </div>
              <button class="btn btn-outline-light w-100 py-2 text-uppercase fw-semibold" style="font-size: 13px;" onclick="agregarAlCarrito(${producto.id})">Añadir al Carrito</button>
            </div>
          </div>
        `;

        currentRow.appendChild(columnaProducto);
    });
}

createCarousel()
const mainForm = () =>{
    const email = document.querySelector('.email').value;
    const text = document.querySelector('.text').value;

    if(email.trim() === '' || text.trim() === ''){
        alert('Los campos son obligatorios');
    }else{
        alert('Gracias por contactarnos')
    }
}

document.getElementById('form-send').addEventListener('submit', (e)=>{
    e.preventDefault();
    mainForm();
});
document.addEventListener("DOMContentLoaded", function () {
    heroVideos();
})


// Mostrar en bucle 5 videos
function heroVideos() {
    // VideActual: Video que se encuentra actualmente, se ira incrementando poco a poco y regresando a 1
    let videoActual = 1;
    // Variable contante donde indica cuantas imagenes se mostraran como limite
    const TOTAL_VIDEOS = 5;

    // Buscamos la etiqueta <video> en el index html
    // Le agremaos como ruta inicial el video 1, el video en muted y que se reproduzca en automatico 
    const video = document.querySelector("video");
    video.src = `assets/video/video${videoActual}.mp4`;
    video.muted = true;
    video.autoplay = true;

    // Creamos un envento en los videos
    // ? Cuando el video acabe:
    video.addEventListener('ended', function () {
        // ? Si el videoActual no es el ultimo video
        // EL video actual cambiara al siguiente
        // Se modifica la ruta 
        if (videoActual != TOTAL_VIDEOS) {
            videoActual = videoActual + 1;
            video.src = `assets/video/video${videoActual}.mp4`;
            // ?  Si el video actal si es el 5
            // Se reincia el bucle en el primer viedo
        } else {
            videoActual = 1;
            video.src = `assets/video/video${videoActual}.mp4`;
        }
    })

}
