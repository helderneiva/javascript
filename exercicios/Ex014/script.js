function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    msg.innerHTML = `Agora são: <strong>${hora}</strong> horas`

    if ( hora >= 0 && hora < 12) {
        img.src="imagens/foto-manha.png"
        document.body.style.background = '#A9C6D9'
        document.body.style.color = 'black'
    }
    else if (hora >= 12 && hora < 18){
        img.src="imagens/foto-tarde.png"
        document.body.style.background = '#D56B39'
    }
    else {
        img.src="imagens/foto-noite.png"
        document.body.style.background = '#192a3d'
    }

}
