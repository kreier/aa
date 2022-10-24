// Copy this code to the bottom of your solution and replace the __specification__
// to the assignments in class.

input.onButtonPressed(Button.A, function () {
    serial.writeLine("I start to make __specification-A__")
    // call your function here
})

input.onButtonPressed(Button.B, function () {
    serial.writeLine("I start to make __specification-B__")
})

// You can use the degree symbol ˚C in your specification
serial.writeLine("Press A for __specification-A__ and B for __specification-B__")
