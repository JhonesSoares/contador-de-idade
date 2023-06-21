const dia = document.querySelector('#idia')
const mes = document.querySelector('#imes')
const ano = document.querySelector('#iano')
const resDia = document.querySelector('#res_dia')
const resMes = document.querySelector('#res_mes')
const resAno = document.querySelector('#res_ano')
const calc_btn = document.querySelector('#botao_calc')

const diaErro = document.querySelector('#erro_dia')
const mesErro = document.querySelector('#erro_mes')
const anoErro = document.querySelector('#erro_ano')

const avisoErro = 'Preencha o campo'
const avisoErro_dia = 'Dia inválido'
const avisoErro_mes = 'Mês inválido'
const avisoErro_ano = 'Ano inválido'



function checkInput_dia(){
    
    let valor = dia.value
    if(valor == ''){
        diaErro.innerHTML = avisoErro
        return false
    } else if(valor < 1 || valor > 31){
        diaErro.innerHTML = avisoErro_dia
        return false
    } else {
        diaErro.innerHTML = ''
        return true
    }
     
}

function checkInput_mes(){
    let valor = mes.value
    if(valor == ''){
        mesErro.innerHTML = avisoErro
        return false
    } else if (valor < 1 || valor > 12){
        mesErro.innerHTML = avisoErro_mes
        return false
    } else {
        mesErro.innerHTML = ''
        return true
    }
}

function checkInput_ano(){
    let valor = ano.value
    let anoAtual = new Date().getFullYear()
    if(valor == ''){
        anoErro.innerHTML = avisoErro
        return false
    } else if(valor > anoAtual){
        anoErro.innerHTML = avisoErro_ano
        return false
    } else {
        anoErro.innerHTML = ''
        return true
    }
}


function calcularIdade(niver){
    let niverData = new Date(niver)
    let dataAtual = new Date();                 

    let diaS = dataAtual.getDate() - niverData.getDate();         console.log(diaS + ' dias')
    let meseS = dataAtual.getMonth() - niverData.getMonth();      console.log(meseS + ' meses')
    let anoS = dataAtual.getFullYear() - niverData.getFullYear(); console.log(anoS + ' anos')
    
    if(diaS < 0 && meseS < 0){ console.log('soma D M')
        diaS = 31 + diaS
        meseS = 11 + meseS
        anoS--
    } else if(diaS < 0) { console.log('normal')
        diaS = 31 + diaS
        meseS = 11
        anoS--
    }else if (meseS <0){
        meseS = 12 + meseS
        anoS--
    } 
    
    resDia.innerHTML = diaS
    resMes.innerHTML = meseS
    resAno.innerHTML = anoS
}

calc_btn.addEventListener('click', (e)=> {
    e.preventDefault()
    
    if(!checkInput_dia() || !checkInput_mes() || !checkInput_ano()) return   

    let niver = `${mes.value}/${dia.value}/${ano.value}`
    calcularIdade(niver)

    

})




