const partidario = []

for (let i = 0; i < 10; i++) {
    partidario.push(parseInt(prompt("["+i+"] Ingrese un valor:")))
    
}

if(esPartidario(partidario)){
    alert("¡El arreglo es partidario!")
}else{
    alert("¡El arreglo no es partidario!")
}

function esPartidario(partidario){
    let aux = false
    for (let i = 0; i < partidario.length; i++) {
        if (i%2==0) {
            if (partidario[i]>partidario[i+1]) {
                aux = true
            }else{
                aux = false
                break
            } 
        }
        
    }

    return aux
}