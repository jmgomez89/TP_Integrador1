let resumen = document.getElementById("resumen")
let precio = document.getElementById("precio")

function mostrarPrecio(){

    let cantidad = document.getElementById("cantidad").value
    let categoriaValor = document.getElementById("categoria").value


    if(categoriaValor === 'estudiante'){
        var total = cantidad * 40
        precio.innerText = total
        console.log(categoriaValor)
    }else if(categoriaValor === 'trainee'){
        var total = cantidad * 100
        precio.innerText = total
        console.log(categoriaValor)
    }else if(categoriaValor === 'junior'){
        var total = cantidad * 170
        precio.innerText = total
        console.log(categoriaValor)
    }
    
    
}

function reinicio() {
    precio.innerText = 0
}