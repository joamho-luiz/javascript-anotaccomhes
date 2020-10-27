function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()                   // Pegar o Ano completo 2019 e não 19.
    var nascimento = document.getElementById('ano')

    if (nascimento.value.length == 0 || Number(nascimento.value) > anoatual) {      // Verificar a caixa de prenchimento.
        window.alert(`Verifique o Ano do nascimento.`)    
    } else {
        var resultado = document.getElementById('res')
        resultado.style.textAlign = 'center'                    // Edição de um elemento pelo JS.

        var imagem = document.createElement('img')              // Criação de um elemento pelo JS.
        //imagem.setAttribute('id', 'foto')

        var idade = anoatual - Number(nascimento.value)         // Cálculo da idade.
        
        var genfor = document.getElementsByName('generos')        // Do formulário, genero.
        var gênero = ''

        if (genfor[0].checked) {                  // Seleção de resultado a partir do genero e idade.

            if (idade >= 0 && idade < 14) {
                // Criança
                imagem.setAttribute('src', 'crianccamas.png')       // configurar um atribuito a imagem.
                gênero = 'Guri'
            } else if (idade < 24) {
                // Adolecente
                imagem.setAttribute('src', 'adolecentemas.png')
                gênero = 'Garoto'
            } else if (idade < 64) {
                // Adulto
                imagem.setAttribute('src', 'adultomas.png')
                gênero = 'Homem'
            }else {
                //Idoso
                imagem.setAttribute('src', 'idosomas.png')
                gênero = 'Senhor'
            }

        } else if(genfor[1].checked) {
            
            if (idade >= 0 && idade < 14) {
                imagem.setAttribute('src', 'crianccafem.png')
                gênero = 'Guria'
            } else if (idade < 24) {
                imagem.setAttribute('src', 'adolecentefem.png')
                gênero = 'Garota'
            } else if (idade < 64) {
                imagem.setAttribute('src', 'adultofem.png')
                gênero = 'Mulher'
            }else {
                imagem.setAttribute('src', 'idosofem.png')
                gênero = 'Senhora'
            }

        } else {

            if (idade >= 0 && idade < 14) {
                imagem.setAttribute('src', 'crianccaind.png')
                gênero = 'Criança'
            } else if (idade < 24) {
                imagem.setAttribute('src', 'adolecenteind.png')
                gênero = 'Adolecente'
            } else if (idade < 64) {
                imagem.setAttribute('src', 'adultoind.png')
                gênero = 'Adulto'
            }else {
                imagem.setAttribute('src', 'idosoind.png')
                gênero = 'Idoso'
            }
            
        }

        resultado.innerHTML = `${gênero} de ${idade} anos. </br>`
        res.appendChild(imagem)
        imagem.style.marginTop = '25px'
    }
}