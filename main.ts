input.onButtonPressed(Button.A, function () {
    eINGABE = "" + eINGABE + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (eINGABE == Passwort) {
        basic.showLeds(`
            # # # . .
            . . # . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    eINGABE = "" + eINGABE + "B"
})
let eINGABE = ""
let Passwort = ""
Passwort = "ABBA"
eINGABE = ""
basic.showLeds(`
    . # # # .
    . # . # .
    # # # # #
    # # # # #
    # # # # #
    `)
