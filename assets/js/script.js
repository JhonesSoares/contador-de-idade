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


function calcularIdade(Nasc){
    let dataNasc = new Date(Nasc)
    let dataAtual = new Date();
    console.log(dataNasc)
    console.log(dataAtual)
    
    let anoAtual = dataAtual.getFullYear()
    let mesAtual = dataAtual.getMonth() + 1 //JANEIRO É REPRESENTADO POR 0
    let diaAtual = dataAtual.getDate()

    let anoNasc = dataNasc.getFullYear()
    let mesNasc = dataNasc.getMonth() + 1 //JANEIRO É REPRESENTADO POR 0
    let diaNasc = dataNasc.getDate()

    var idade = {};
    idade.anos = anoAtual - anoNasc
    idade.mes = mesAtual - mesNasc
    idade.dias = diaAtual - diaNasc 
    
    if(idade.dias < 0){
        let ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate()
        idade.dias = idade.dias + ultimoDiaMesAnterior
        idade.mes--
        
    } else if(idade.mes < 0){
        idade.mes = idade.mes + 12
        idade.anos--
        
    }
    
    resAno.innerHTML = idade.anos
    resMes.innerHTML = idade.mes
    resDia.innerHTML = idade.dias   
}

calc_btn.addEventListener('click', (e)=> {
    e.preventDefault()
    
    if(!checkInput_dia() || !checkInput_mes() || !checkInput_ano()) return   

    let Nasc = `${mes.value}/${dia.value}/${ano.value}`
    calcularIdade(Nasc)
})




