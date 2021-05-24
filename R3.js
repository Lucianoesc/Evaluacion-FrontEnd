'use strict'

window.onload = () => {

    const play  = document.querySelector("#play-button");
    const modal = document.querySelector(".modal-background");
    const video = document.querySelector(".modal video");
    
    // funcion para al darle click, reproducir el video //
    play.addEventListener('click', function() {
        modal.style.display = "inline-flex";
        video.play()
    });


// Cuando el click del usuario sea afuera del modal, pausar el video, volver a 0 y cerrar el modal //
    modal.addEventListener('click', (e) => {

        if(e.target == modal){
            video.pause();
            video.currentTime = 0;
            modal.style.display = "none";
        }
    })
   
};