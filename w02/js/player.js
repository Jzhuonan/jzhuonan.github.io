var app = new Vue({
    el: '#app',
    data: {
        isPlaying: false,
        songs: [
            { name: 'stay', artist: 'The Kid LAROI & Justin Bieber', cover: './images/stay.png', src: './musics/stay.mp3' },
            { name: 'faded', artist: 'Alan Walker', cover: './images/faded.png', src: './musics/Faded.mp3' },
            { name: 'rather be', artist: 'Clean Bandit', cover: './images/ratherbe.jpg', src: './musics/Rather Be.mp3' },
            { name: 'Falling Down', artist: 'Wild Cards', cover: './images/fallingdown.jpg', src: './musics/fallingdown.mp3' },
            { name: 'attention', artist: 'Charlie Puth', cover: './images/attention.jpg', src: './musics/attention.mp3' }
        ]
    },
    methods: {
        togglePlay: function(e, index) {
            if (this.isPlaying) {
                this.$refs.audio[index].pause()
                this.isPlaying = !this.isPlaying
                e.target.src = './images/play.png'
            } else {
                this.$refs.audio[index].play()
                this.isPlaying = !this.isPlaying
                e.target.src = './images/pause.png'
            }
        }
    },
})
