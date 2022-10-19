input.onButtonPressed(Button.A, function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (Y % 2 <= 1) {
                led.plot(4 - X, Y)
                basic.pause(100)
                basic.clearScreen()
            } else {
                led.plot(X, Y)
                basic.pause(100)
                basic.clearScreen()
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            if (X % 2 == 1) {
                led.plot(X, 4 - Y)
                basic.pause(100)
                basic.clearScreen()
            } else {
                led.plot(X, Y)
                basic.pause(100)
                basic.clearScreen()
            }
        }
    }
})
