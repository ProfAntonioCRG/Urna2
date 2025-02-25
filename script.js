// script.js

let numeroDigitado = '';

function teclar(numero) {
    if (numeroDigitado.length < 2) { // Limita o número de dígitos a 2 (por exemplo)
        numeroDigitado += numero.toString();
        document.getElementById('numero').innerText = numeroDigitado;
        playSom('tecla-som');
    }
}

function limpar() {
    numeroDigitado = '';
    document.getElementById('numero').innerText = '';
    document.getElementById('mensagem').innerText = '';
    playSom('tecla-som');
}

function confirmar() {
    if (numeroDigitado.length === 2) { // Verifica se foram digitados 2 números
        enviarParaBackend(numeroDigitado);
    } else {
        document.getElementById('mensagem').innerText = 'Digite um número válido.';
    }
}

function enviarParaBackend(numero) {
    fetch('/votar', { // Substitua '/votar' pela URL do seu back-end
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numero: numero }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('mensagem').innerText = 'Voto registrado com sucesso!';
            playSom('fim-som');
            limpar();
        } else {
            document.getElementById('mensagem').innerText = 'Erro ao registrar voto.';
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
        document.getElementById('mensagem').innerText = 'Erro ao conectar com o servidor.';
    });
}

function playSom(id) {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
}
