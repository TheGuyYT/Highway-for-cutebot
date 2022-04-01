let Sonar = 0
basic.forever(function () {
    Sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (Sonar > 2 && Sonar < 15) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        for (let index = 0; index < 15; index++) {
            music.playMelody("C5 B A G F E D C ", 1000)
            music.playMelody("C D E F G A B C5 ", 1000)
        }
        cuteBot.stopcar()
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
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
