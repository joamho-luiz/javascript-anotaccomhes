var nota = document.getElementById('nNota')
var tabela = document.getElementById('sel')
var n = Number(nota.value)

function Adicionar () {
    if (nota.value.length == 0) {
        window.alert('Digite a Nota primeiro.')
    } else {
        window.alert(`Nota: ${n}`)
    }
}

function Calcular () {
    
}