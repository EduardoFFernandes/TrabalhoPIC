function muteUnmute() { 
    var video = document.getElementById('videoIntroducao')
    var a = document.getElementsByClassName('btn-trans')
    if(video.muted) {
        video.muted = false;
        a[0].innerText = 'Mute'
        video.play()
    } else {
        video.muted = true;
        a[0].innerText = 'Play'
        video.pause()
    }
}