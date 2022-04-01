let Sonar = 0
basic.forever(function () {
    Sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (Sonar > 2 && Sonar < 15) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        cuteBot.motors(-25, -25)
        for (let index = 0; index < 4; index++) {
            music.playTone(440, music.beat(BeatFraction.Quarter))
        }
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        cuteBot.motors(25, 25)
    }
})
