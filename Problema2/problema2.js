var respuestas = new Array(5)


for (let i = 0; i < respuestas.length; i++) {
    respuestas[i] = prompt("Pregunta #"+(i+1)+", ingrese una de las siguientes opciones:\nA\nB\nC").toUpperCase()
}

calcPuntos(respuestas)

function calcPuntos(respuestas) {
    var sumaPuntos = 0
    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i] === "A"){
            if (i=== 0 || i === 2) {
                sumaPuntos++
            }
        } 
        if (respuestas[i] === "B"){
            if (i===1 || i===4) {
                sumaPuntos++
            }
        } 
        if(respuestas[i] === "C"){
            if (i===3) {
                sumaPuntos++
            }
        }
    }

    calcNota(sumaPuntos)
}

function calcNota(puntos) {
    if(puntos >= 5){
        alert("Obtuvo una puntuación de: "+sumaPuntos+"\nSu nota es A")
    } else if(puntos == 4){
        alert("Obtuvo una puntuación de: "+sumaPuntos+"\nSu nota es C")
    }else {
        alert("Obtuvo una puntuación de: "+sumaPuntos+"\nDeberá repetir la prueba")
    }
}