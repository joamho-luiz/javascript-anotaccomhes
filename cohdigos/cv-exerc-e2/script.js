function Calcular() {
    var num = document.getElementById('nuhmero')
    var res = document.getElementById('resultado')
    
    if (num.value.length == 0) {
        window.alert('Digite um número.')
    } else {
        var sel = document.createElement('select')
        sel.setAttribute('size', '10')
        res.appendChild(sel)

        let n = Number(num.value)
        for (let c = 1; c <= 10; c++){
            let op = document.createElement('option')
            op.text = `${n} x ${c} = ${c*n}`
            sel.appendChild(op)
        }
    }
}