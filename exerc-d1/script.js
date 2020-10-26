function carregar() {
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    // hora = 144  // Para teste.

    mensagem.innerHTML = `Agora são ${hora} horas`

    // Seleção de imagem e fundo a partir da hora.
    if (hora >=0 && hora < 6) {
        // Boa Madrugada
        imagem.src = 'fotomadrugada.png'
        document.body.style.background = '#474b54'
    } else if (hora < 12) {
        // Bom dia
        imagem.src = 'fotomanhamh.png'
        document.body.style.background = '#fce774'
    } else if (hora < 18) {
        // Boa noite
        imagem.src = 'fototarde.png'
        document.body.style.background = '#fe9110'        
    }else if (hora <= 24) {
        // Boa noite
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#110c12'
    }else {
        // Hora invalida
        window.alert('Sinto muito, mas nosso sistema está fora do ar.')
        mensagem.innerHTML = `Não conseguimos te dizer a hora. &#x1F614; `
    }
}