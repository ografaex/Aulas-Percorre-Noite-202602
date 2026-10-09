function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

let peso = 67
let altura = 1.75
let imc = calcularIMC(peso, altura)

// Abaixo do peso <= 28.4
// Peso normal 18.5 a 24.9
// Sobrepeso >= 25

if (imc <= 18.4) {
    console.log("Você está abaico do peso");
}
else if (imc <= 24.9) {
    console.log("Você está no peso ideal");
}
else {
    console.log("Você está acima do peso");
}