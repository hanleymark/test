input.onButtonPressed(Button.A, function () {
    let i = 0
    for (let i = 0; i <= randint(0, 6) + 16; i++) {
        diceImages[i % 6].showImage(0, 50)
        music.playTone(randint(1, 6) * 131, music.beat(BeatFraction.Sixteenth))
    }
    basic.pause(200)
    for (let index = 0; index < i; index++) {
        music.playTone(988, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
    }
    basic.pause(1000)
    images.arrowImage(ArrowNames.West).showImage(0)
})
let diceImages: Image[] = []
diceImages = [
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `),
images.createImage(`
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `),
images.createImage(`
    . . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . .
    `),
images.createImage(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `),
images.createImage(`
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    `)
]
images.arrowImage(ArrowNames.West).showImage(0)
