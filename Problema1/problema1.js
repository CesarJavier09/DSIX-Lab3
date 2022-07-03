//Función para convertir lbs a Kg
var aKg = (lbs) =>{return lbs/2.2046}

//Lectura de datos
var peso = prompt("Ingrese su peso en lbs: ")
var altura = prompt("Ingrese su altura en metros: ")

var imc = calcIMC(peso,altura)
console.log(imc);

if (imc>25) {
    alert("¡CUIDADO, ESTAS EN SOBREPESO!")
} else if (imc>=18.5) {
    alert("Saludable, tu peso es normal")
}else{
    alert("Por debajo del peso es normal")
}

//Función para calcular el IMC
function calcIMC(pesoLb, altura) {
    return aKg(pesoLb)/Math.pow(altura,2)
}