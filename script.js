document.addEventListener("DOMContentLoaded", function () {
    heroVideos();
})

function heroVideos() {
    let videoActual = 1;
    const TOTAL_VIDEOS = 5;

    const video = document.querySelector("video");
    const claseVideos = document.querySelector('.hero');
    video.src = `assets/video/video${videoActual}.mp4`;
    video.muted = true;
    video.autoplay = true;
    claseVideos.append(video);

    video.addEventListener('ended', function () {
        if (videoActual != TOTAL_VIDEOS) {
            videoActual = videoActual + 1;
            video.src = `assets/video/video${videoActual}.mp4`;

        } else {
            videoActual = 1;
            video.src = `assets/video/video${videoActual}.mp4`;
        }
    })

}