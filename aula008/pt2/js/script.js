
function validar() {
    var pais = window.document.getElementById('pais').value
    var res = window.document.getElementById('res')
    if (pais != 'Brasil'){
        res.innerHTML = `Voce é de ${pais}, estrangeiro!`
    } else {
        res.innerHTML = `Voce é de ${pais}, de nosso país!`
    }
    res.innerHTML += `Seja bem vindo!`
}