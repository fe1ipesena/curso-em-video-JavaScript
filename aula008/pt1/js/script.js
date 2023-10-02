
function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é <strong>${vel}</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Voce foi <strong>multado</strong> por ultrapassar o limite de velocidade!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`

}