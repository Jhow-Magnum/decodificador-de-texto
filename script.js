function criptografar(criptografarTexto) {
    const textoCriptografado = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
    ];

    textoCriptografado.forEach(par => { criptografarTexto = criptografarTexto.replaceAll(par[0], par[1]) });

    return criptografarTexto;
}

function btnCriptografar() {
    const mensagemRecebida = document.getElementById('container__text-input').value;
    
    let mensagemCriptografada = criptografar(mensagemRecebida);
    document.getElementById('container__message-input').innerText = "Texto Criptografado: " + mensagemCriptografada;

     // Oculta a imagem de alerta
     document.querySelector('.container__img').style.display = 'none';
     document.querySelector('.container__img__text').style.display = 'none';
}

