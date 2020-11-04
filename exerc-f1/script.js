var nt = document.querySelector('input#grade')
var tabela = document.getElementById('sel')
var nota = nt.value
var resultado = document.getElementById('res')

var notas = []
var contador = 1;

function Adicionar () {
    window.alert(`${parseFloat(nt.value)}`)
    
    if (nt.value.length == 0) {
        window.alert('Digite a Nota primeiro.')
    } else {
        let opt = document.createElement('option')
        opt.text = `${contador}ª nota: ${nota}`
        contador++
        tabela.appendChild(opt)
    }
}

function Calcular () {
    
}