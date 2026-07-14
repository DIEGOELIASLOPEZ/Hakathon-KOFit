
/*SECCION DE ALERTA DE PLANES Y PRECIOS */
document.addEventListener('DOMContentLoaded', function () {
    // 1. Seleccionar todos los botones de planes
    const botonesPlan = document.querySelectorAll('.btn-plan, .btn-plan-destacado');
    // 2. Agregar evento a cada botón
    botonesPlan.forEach(boton => {
        boton.addEventListener('click', function (e) {
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
        columnaProducto.className = "col-12 col-md-4 d-flex";

        const badgeHTML = producto.tag
            ? `<span class="badge ${producto.tagClass} position-absolute top-0 end-0 m-2 text-uppercase font-monospace" style="font-size: 10px;">${producto.tag}</span>`
            : '';

        columnaProducto.innerHTML = `
        <div class="card bg-secondary bg-opacity-25 border-secondary text-white shadow d-flex flex-column w-100 h-100">
            
            <div class="position-relative bg-white p-3 d-flex align-items-center justify-content-center" style="height: 220px; min-height: 220px; cursor: pointer;" onclick="showProductDetails(${producto.id})">
            ${badgeHTML}
            <img src="${producto.img}" class="img-fluid" loading="lazy" style="max-height: 100%; " alt="${producto.name}">
            </div>

            <!-- flex-grow-1 obliga al cuerpo a estirarse y justify-content-between alinea los bloques -->
            <div class="card-body d-flex flex-column flex-grow-1 justify-content-between p-3">
            
            <!-- Bloque Superior: Contenido del texto -->
            <div class="mb-3">
                <h5 class="card-title fs-6 fw-semibold mb-1 text-danger" style="cursor: pointer;" onclick="showProductDetails(${producto.id})">${producto.name}</h5>
                <div class="text-warning small mb-2">${producto.rating}</div>
                <div class="contenedor-descripcion position-relative">
                    <p class="text-descrp card-text text-muted small mb-0" style="font-size: 12px; line-height: 1.4;">${producto.description}</p>
                </div>
            </div>

            <!-- Bloque Inferior: Precio y Botón (Empujados magnéticamente al fondo) -->
            <div class="mt-auto">
                <p class="card-text fw-bold fs-4 mb-3 text-white">$${producto.price.toLocaleString('es-MX')}</p>
                <button class="btn btn-outline-light w-100 py-2 text-uppercase fw-semibold" style="font-size: 13px;" onclick="addToCar(${producto.id})">Añadir al Carrito</button>
            </div>

            </div>
        </div>
        `;

        currentRow.appendChild(columnaProducto);
    });
}

createCarousel()
const mainForm = () => {
    const email = document.querySelector('.email').value;
    const text = document.querySelector('.text').value;

    if (email.trim() === '' || text.trim() === '') {
        alert('Los campos son obligatorios');
    } else {
        alert('Gracias por contactarnos')
    }
}

document.getElementById('form-send').addEventListener('submit', (e) => {
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

// Variable global para llevar la cuenta matemática del dinero acumulado

let carrito = [];

function addToCar(prodId) {
    // Buscamos el producto en tu catalogo base
    const productoCatalogo = Productos.find(p => p.id === prodId);
    if (!productoCatalogo) return;

    // Revisamos si este producto ya existía previamente en el carrito
    const productoEnCarrito = carrito.find(item => item.id === prodId);

    if (productoEnCarrito) {
        // Si YA existe, incrementamos su cantidad matemática en 1
        productoEnCarrito.cantidad += 1;
    } else {
        // Si NO existe, lo agregamos al arreglo creando la propiedad 'cantidad' inicializada en 1
        // Usamos el operador spread (...) para copiar las propiedades y añadir la nueva
        carrito.push({ ...productoCatalogo, cantidad: 1 });
    }

    // Renderizamos los cambios visuales en la pantalla y abrimos el panel
    actualizarInterfazCarrito();
    showCartSidebar();
}

// Funcion encargada de dibujar el HTML del carrito basándose en el arreglo actual
function actualizarInterfazCarrito() {
    const modalBody = document.getElementById("modal-carrito");
    if (!modalBody) return;

    // Limpiamos el contenedor por completo para redibujarlo con los datos frescos
    modalBody.innerHTML = "";

    let totalDinero = 0;
    let totalPiezas = 0;

    // Si el carrito esta completamente vacio, mostramos un mensaje amigable
    if (carrito.length === 0) {
        modalBody.innerHTML = `
            <div class="text-center text-muted py-5">
                <i class="bi bi-cart-x fs-1 d-block mb-2"></i>
                <p class="small mb-0">Tu carrito está vacío.</p>
            </div>
        `;
        
        // Reseteamos los marcadores visuales exteriores a cero
        document.getElementById("priceCart").textContent = "$0.00";
        document.getElementById("countCart").textContent = "0";
        return;
    }

    // Recorremos el arreglo del carrito para fabricar las filas de productos acumulados
    carrito.forEach(item => {
        const filaProducto = document.createElement("div");
        filaProducto.className = "row g-2 mb-3 pb-3 border-bottom border-secondary align-items-center mx-0 text-white";

        // Sumamos los totales matemáticos del dinero y las piezas
        totalDinero += item.price * item.cantidad;
        totalPiezas += item.cantidad;

        filaProducto.innerHTML = `
            <!-- Cuadro de la Imagen -->
            <div class="col-3 d-flex align-items-center justify-content-center bg-white p-2 rounded" style="height: 75px;">
                <img src="${item.img}" class="img-fluid" style="max-height: 100%;" alt="${item.name}">
            </div>
            
            <!-- Datos del Producto -->
            <div class="col-6 text-start ps-3">
                <h6 class="fs-6 fw-bold mb-0 text-danger text-truncate" style="max-width: 160px;">${item.name}</h6>
                <p class="fw-bold fs-6 mb-1 text-white">$${item.price.toLocaleString('es-MX')}</p>
                <!-- Indicador visual de piezas acumuladas de este artículo -->
                <span class="badge bg-secondary font-monospace" style="font-size: 11px;">Cant: ${item.cantidad}</span>
            </div>

            <!-- BOTONES DE CONTROL DE CANTIDADES (Sumar o Restar uno por uno) -->
            <div class="col-3 d-flex justify-content-end gap-1">
                <!-- Botón de menos (Quitar uno) -->
                <button class="btn btn-sm btn-outline-secondary p-1 px-2 border-secondary text-white" onclick="quitarUno(${item.id})">
                    <i class="bi bi-dash"></i>
                </button>
                <!-- Botón de más (Añadir otro igual desde el carrito) -->
                <button class="btn btn-sm btn-outline-danger p-1 px-2 text-danger" onclick="addToCar(${item.id})">
                    <i class="bi bi-plus"></i>
                </button>
            </div>
        `;

        modalBody.appendChild(filaProducto);
    });

    // Actualizamos el dinero total formateado en el pie del panel
    document.getElementById("priceCart").textContent = `$${totalDinero.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
    
    // Actualizamos el contador de la burbuja roja de la barra de navegación con el número real de piezas
    document.getElementById("countCart").textContent = totalPiezas;
}

// Funcion encargada de restar una sola pieza o eliminar el producto si llega a cero
function quitarUno(prodId) {
    // Buscamos el artículo directamente dentro de nuestro carrito
    const productoEnCarrito = carrito.find(item => item.id === prodId);
    if (!productoEnCarrito) return;

    if (productoEnCarrito.cantidad > 1) {
        // Si tiene mas de una pieza, simplemente le restamos 1
        productoEnCarrito.cantidad -= 1;
    } else {
        // Si le quedaba solo 1 pieza y presionan menos, se remueve
        // El metodo .filter() genera una nueva lista excluyendo al ID que queremos borrar
        carrito = carrito.filter(item => item.id !== prodId);
    }

    actualizarInterfazCarrito();
}

// Funcion para limpiar
function vaciarCarrito() {
    carrito = []; // Vaciamos el arreglo por completo
    actualizarInterfazCarrito(); // Actualizamos la pantalla
}

function showCartSidebar() {
    const miCarritoHTML = document.getElementById('modalCart');
    if (miCarritoHTML) {
        const instanciaCarrito = bootstrap.Offcanvas.getInstance(miCarritoHTML) || new bootstrap.Offcanvas(miCarritoHTML);
        instanciaCarrito.show();
    }
}

function showProductDetails(idProd) {
    const producto = Productos.find(p => p.id === idProd);
    if (!producto) return;

    const contenedorDetalles = document.getElementById("modal-details-content");
    if (!contenedorDetalles) return;

    contenedorDetalles.innerHTML = `
        <div class="row g-4 align-items-center">
            <div class="col-12 col-md-5 d-flex align-items-center justify-content-center bg-white p-4 rounded shadow-sm" style="height: 280px;">
                <img src="${producto.img}" class="img-fluid" style="max-height: 100%;" alt="${producto.name}">
            </div>
            
            <div class="col-12 col-md-7 text-start">
                <span class="text-muted small text-uppercase font-monospace d-block mb-1">SKU: BOX-${producto.id}00${producto.id}</span>
                <h3 class="fw-bold text-white mb-2 fs-4">${producto.name}</h3>
                <div class="text-warning mb-3 fs-5">${producto.rating}</div>
                
                <h5 class="fs-6 fw-bold text-danger text-uppercase mb-2">Descripción del Artículo:</h5>
                <p class="text-light small mb-4" style="line-height: 1.6; font-size: 13px; text-align: justify;">
                    ${producto.description}
                </p>
                
                <div class="d-flex align-items-center justify-content-between bg-secondary bg-opacity-10 p-3 rounded border border-secondary">
                    <div>
                        <span class="text-muted d-block small" style="font-size: 11px;">Precio Sugerido</span>
                        <span class="text-descrp fw-bold fs-3 text-success">$${producto.price.toLocaleString('es-MX')}</span>
                    </div>
                    <!-- Boton directo de compra dentro del modal informativo -->
                    <button class="btn btn-danger px-4 py-2 text-uppercase fw-bold btn-sm" onclick="closeDetailsAndAdd(${producto.id})">
                        Comprar Ahora
                    </button>
                </div>
            </div>
        </div>
    `;

    const miModalHTML = document.getElementById('modalDetails');
    const instanciaModal = new bootstrap.Modal(miModalHTML);
    instanciaModal.show();
}

function closeDetailsAndAdd(idProd) {
    // Buscamos el modal abierto por su ID de Bootstrap y obtenemos la instancia activa para cerrarlo
    const miModalHTML = document.getElementById('modalDetails');
    const instanciaModal = bootstrap.Modal.getInstance(miModalHTML);
    if (instanciaModal) {
        instanciaModal.hide(); // Cierra el modal de detalles
    }
    
    // Ejecuta tu otra función para añadirlo al carrito y abrir el modal del carrito
    addToCar(idProd);
}