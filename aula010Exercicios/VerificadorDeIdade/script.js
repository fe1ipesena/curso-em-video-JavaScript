
function verificar() {

    data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            //verificaçao da idade
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotoBebeHomem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotoJovemHomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoAdulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoIdoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            //verificaçao da idade
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotoBebeMulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotoJovemMulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoAdulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}