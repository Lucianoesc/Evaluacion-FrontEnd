'use strict'

window.onload = () => {

    const play  = document.querySelector("#play-button");
    const modal = document.querySelector(".modal-background");
    const video = document.querySelector(".modal video");
    
    play.addEventListener('click', function() {
        modal.style.display = "inline-flex";
        video.play()
    });



    modal.addEventListener('click', (e) => {

        if(e.target == modal){
            video.pause();
            video.currentTime = 0;
            modal.style.display = "none";
        }
    })
   
};