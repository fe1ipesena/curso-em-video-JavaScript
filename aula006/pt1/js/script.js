
var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.color = 'yellow'
}

function entrar() {
    a.innerText = 'Entrou'
    a.style.color = 'blue'
}

function sair() {
    a.innerText = 'Saiu'
    a.style.color = 'red'
}