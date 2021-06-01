input.onButtonPressed(Button.A, function () {
    peso = peso + 1
    basic.showNumber(peso)
})
input.onGesture(Gesture.Shake, function () {
    peso = 74
    basic.showNumber(peso)
})
input.onButtonPressed(Button.AB, function () {
    imc = 10000 * peso / estatura
    if (imc >= 18.5 && imc <= 25) {
        // S es Saludable
        basic.showString("S")
    } else if (imc >= 25 && imc <= 30) {
        // SP es Sobrepeso
        basic.showString("SP")
    } else if (imc > 30) {
        // OB es Obesidad
        basic.showString("OB")
    } else {
        // DE es Delgada
        basic.showString("DE")
    }
    basic.showNumber(imc)
})
input.onButtonPressed(Button.B, function () {
    peso = peso - 1
    basic.showNumber(peso)
})
let imc = 0
let estatura = 0
let peso = 0
peso = 74
estatura = 180
estatura += estatura * estatura
imc = 0
