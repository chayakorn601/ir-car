function right () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 60, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 60, 67)
}
function back () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 60, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 60, 67)
}
function front () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 60, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 60, 67)
}
function left () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 60, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 60, 67)
}
function stop () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, 67)
}
maqueen.IR_callbackUser(function ({ myparam: message }) {
    val = message
    serial.writeNumber(val)
    serial.writeString("" + (val))
    if (val == 70) {
        front()
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (val == 68) {
        left()
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (val == 67) {
        right()
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (val == 21) {
        back()
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
    if (val == 64) {
        stop()
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
let strip: neopixel.Strip = null
let val = 0
basic.showLeds(`
    # # . # #
    . # # # .
    . # . # .
    . # . # .
    # . # . #
    `)
val = 0
PCA9685.init(67, 0)
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
