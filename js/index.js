let input = document.getElementById('input')
let table = document.getElementById('table-body')
let numeros
let estadisticas = {}

let borrarNumeros =()=>{
    Object.keys(estadisticas).forEach(numero=>{
        delete estadisticas[numero]
    })
    borrarNumeroHTML()
    input.value = ""
}
let calcularEstadistica =()=>{
    numeros = input.value.split('-')
    if (!(numeros.includes("") || numeros.includes(" "))) {
        numeros.forEach(numero => {
            if (Object.keys(estadisticas).includes(numero)) {
                estadisticas[numero]++
            }else{
                estadisticas[numero] = 1
            }
        });
        actualizarTabla(estadisticas)
    }
    return estadisticas
}
let actualizarTabla=(estadisticas)=>{
    Object.keys(estadisticas).forEach(numero=>{
        table.insertAdjacentHTML("beforeend", `<tr class="numero">
                        <td>${numero}</td>
                        <td>${estadisticas[numero]}</td>
                        <td><button class="delete-btn" onclick="eliminarFila(this,${numero})">Eliminar</button></td>
                    </tr>`)
    })
}
let eliminarFila=(btn, numero)=>{
    delete estadisticas[numero]
    btn.closest('tr').remove()
}
let borrarNumeroHTML =()=>{
    let elementos = table.getElementsByClassName('numero')
    
    for (let i = 0; i < elementos.length; i++) {
        elementos.item(i).remove()        
        console.log(`Borre ${elementos.length}`);
    }
}
let calcularIntervalos =(estadisticas)=>{
    c = 1 + (3.322*Math.log(Object.keys(estadisticas).length))
}