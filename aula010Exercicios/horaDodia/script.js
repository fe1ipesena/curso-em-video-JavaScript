
function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    
    if(hora >= 0 && hora < 12){
        //BOM DIA
        msg.innerHTML = `Agora são ${hora} horas, Bom dia!`
        img.src = 'manha.png'
        document.body.style.background = '#636356'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        msg.innerHTML = `Agora são ${hora} horas, Boa tarde!`
        img.src = 'tarde.png'
        document.body.style.background = '#02a9b3'
    }else{
        //BOA NOITE
        msg.innerHTML = `Agora são ${hora} horas, Boa noite!`
        img.src = 'noite.png'
        document.body.style.background = '#111a1f'
    }

}


