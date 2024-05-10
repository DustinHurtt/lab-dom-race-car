class Game {

    constructor() {
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById("game-screen")
        this.gameEndScreen = document.getElementById('game-end')
        this.player = new Player(this.gameScreen, 215, 450, 66, 150, '../images/shelby.png')
        this.height = 600
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.timer = 30
        this.gameIsOver = false
        this.gameIntervalId = null
        this.gameLoopFrequency = 1000/60
        this.frames = 0
    }
    
    start() {

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.startScreen.style.display = 'none'
        this.startScreen.style.padding = 0
        this.startScreen.style.height = 0

        this.gameScreen.style.display = 'block'

        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        }, this.gameLoopFrequency)

    }

    gameLoop() {
        this.frames += 1

        if (this.frames % 120 === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen))
        }

        this.update()

        if (this.gameIsOver === true) {
            clearInterval(this.gameIntervalId)
        }
    }

    update() {
        this.player.move()

        console.log("This is the obstacle array length", this.obstacles.length)
        this.obstacles.forEach((obstacle, i) => {
            obstacle.move()

            if (obstacle.top > 640) {
                obstacle.element.remove()
                this.obstacles.splice(i, 1)
            }
        })


    }
}
