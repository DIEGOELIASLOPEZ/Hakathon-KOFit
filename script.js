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
