const playIcon = document.querySelector('.play-icon')
const player = document.querySelector('.player')
const musicSource = document.querySelector('.player source')
const musics = ['attention', 'Faded', 'fallingdown', 'Rather Be', 'stay']

playIcon.addEventListener('click', () => {
    if (player.paused) {
        player.play()
        playIcon.src = './images/pause.png'
    } else {
        player.pause()
        playIcon.src = './images/play.png'
    }
})

