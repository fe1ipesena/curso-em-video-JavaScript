
function gerar(){
    let num = document.getElementById('numerotabuada')
    let lista = document.getElementById('lista')

    if(num.value.length == 0){
        window.alert('por favor digite um numero')
    } else {
        let n = Number(num.value)
        let c = 1
        lista.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            lista.appendChild(item)
            c++
        }
    }



}