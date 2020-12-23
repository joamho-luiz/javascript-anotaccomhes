function Contar() {
    var numInihcio = document.getElementById('numInicial')
    var numFim = document.getElementById('numFinal')
    var numPas = document.getElementById('numPasso')
    var resultado = document.getElementById('resultado')

    if (numInihcio.value.length == 0)  {
        window.alert('Digite o número do início da contagem.')
    } else if (numFim.value.length == 0) {
        window.alert('Digite o número para o termino da contagem.')
    }else if (numPas.value.length == 0) {
        window.alert('Passos não determinado. Irei contar de 1 em 1.')
        numPas = 1;
    }else {
        let i = Number(numInihcio.value)
        let f = Number(numFim.value)
        let p = Number(numPas.value)
        var res = ''

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res += (c == i) ? ('') : ('\u{27A1}')
                res += c
            }
        } else if (i > f) {
            for (let c = i; c >= f; c -= p) {
                res += (c == i) ? ('') : ('\u{27A1}')
                res += c
            }
        }

        resultado.innerHTML = `Contando de ${i} até ${f} de ${p} em ${p} obtemos: <br> ${res}`
        resultado.style.marginTop = "30px"
    }
}