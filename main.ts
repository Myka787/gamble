input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            music.playMelody("C D E F G A B C5 ", 7870)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            music.playMelody("C D E F G A B C5 ", 7870)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            music.playMelody("C D E F G A B C5 ", 7870)
        }
        game.setScore(0)
    }
    if (game.score() <= 78) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        for (let index = 0; index < 10; index++) {
            basic.setLedColor(0x00ff00)
            basic.pause(100)
            basic.setLedColor(randint(0, 787))
            basic.pause(100)
        }
        music.playMelody("E B C5 A B G A F ", 787)
        basic.pause(2000)
    } else if (game.score() <= 7) {
        for (let index = 0; index < 7; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            for (let index = 0; index < 20; index++) {
                basic.setLedColor(0x7f00ff)
                basic.pause(100)
                basic.setLedColor(0x999999)
                basic.pause(100)
            }
        }
        basic.pause(5000)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        basic.pause(1000)
        basic.setLedColor(0x999999)
        music.playMelody("B A E G F E D D ", 787)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # # .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # # .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    game.setScore(randint(1, 2))
    if (game.score() == 1) {
        basic.showLeds(`
            # # . # #
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.Umbrella)
    }
})
