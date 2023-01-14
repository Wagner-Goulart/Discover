// SISTEMA PARA TRANSFORMAR CELSIUS EM FAHRENHEIT E VICE-VERSA

function convertDegreestoFahrenheit(string) {
    let fahren = string*9/5+32

    console.log(`A temperatura ${string} Cº convertida para Fahrenheit é de ${fahren.toFixed(2)} F`)
    return fahren
}
function convertDegreestoCelsius(string) {
    let celsius = (string-32)*5/9

    console.log(`A temperatura ${string} F convertida para Fahrenheit é de ${celsius.toFixed(2)} Cº`)
    return celsius

}

convertDegreestoFahrenheit(50)
convertDegreestoCelsius(50)