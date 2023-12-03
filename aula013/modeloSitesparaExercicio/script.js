
function count() {

    let init = document.getElementById('init')
    let end = document.getElementById('end')
    let jump = document.getElementById('jump')
    let count = document.getElementById('count')

    if (init.value.length == 0 || end.value.length == 0 ||
        jump.value.length == 0) {
        window.alert('erro! faltam dados.')
    } else {
        count.innerHTML = `contando:<br>`
        let i = Number(init.value)
        let f = Number(end.value)
        let j = Number(jump.value)

        if(j <= 0){
            window.alert('passo invalido! considerando passo 1')
            j = 1
        }

        if (i < f) { //contagem crescente
            for (let c = i; c <= f; c += j) {
                count.innerHTML += `${c} \u{1F449}`
            }
            count.innerHTML += `\u{1F928}`
        } else {//contagem regressiva
            for (let c = i; c >= f; c -= j) {
                count.innerHTML += `${c} \u{1F449}`
            }
            count.innerHTML += `\u{1F928}`
        }
    }

}

