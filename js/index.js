const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play()
    $play.hidden=true
    $pause.hidden=false
    console.log('Estas haciendo click en PLay')
}


function handlePause() {
    $video.pause()
    $pause.hidden=true
    $play.hidden=false
    console.log('Estas haciendo click en Pause')
}


$backward.addEventListener('click', handleBackward)
function handleBackward() {
//    $video.currentTime=$video.currentTime-10
    $video.currentTime -=10
    console.log('Para atrás 10 segundos')
}

$forward.addEventListener('click', handleForward)
function handleForward() {
//    $video.currentTime=$video.currentTime+10
    $video.currentTime +=10
    console.log('Para adelante 10 segundos')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log('ha cargado mi video',$video.duration)
}

function handleTimeUpdate() {
    ProgressEvent.value = $video.currentTime
    console.log('video actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime=$progress.value
    console.log($progress.value)
}