function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var anoDigitado = Number(fano.value)
    if (anoDigitado.length == 0 || anoDigitado <= 0 || anoDigitado > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - anoDigitado
        var gênero = ''
    
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 2) {
                //bebe
        
            } else if (idade < 11) {
                //criança
            } else if (idade < 19) {
                //adolescente
            } else if (idade < 25) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                //bebe
            } else if (idade < 11) {
                //criança
            } else if (idade < 19) {
                //adolescente
            } else if (idade < 25) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
}