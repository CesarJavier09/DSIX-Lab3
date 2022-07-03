
var num = new Array(5)

for (let i = 0; i < num.length; i++) {
    num[i] = parseInt(prompt("["+(i+1)+"] Ingrese un valor:"))
}

compararArreglo()

function compararArreglo() {
    let x = parseInt(prompt("Ingrese un valor a comparar: "))
    let igual = new String()
    let aux = false
    let index = -1
    let ultIndex
    for (let i = 0; i < num.length; i++) {
        let j = num.length-1
        index = num.indexOf(x,i)
        console.log(i+":"+j);
        if (index!=-1&&index!=ultIndex) {
            
            if (i == 0) {
                igual += index.toString()
                aux = true
            }else if(index == j){
                igual += " y "+index.toString()
                aux = true
            }else {
                igual += ", "+index.toString()
                aux = true
            }
        }

        ultIndex = index
    }
    
    if (aux) {
        alert("El valor "+x+", se encuentra en la(s) posicion(es):\n"+igual)
    }else{
        alert("El valor "+x+", no se encontró en el arreglo")
    }
}