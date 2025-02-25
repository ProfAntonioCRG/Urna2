// admin_script.js

// Função para liberar a votação
function liberarVotacao() {
    fetch('/liberar-votacao', { // Substitua pela URL do seu back-end
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Votação liberada com sucesso!');
        } else {
            alert('Erro ao liberar votação.');
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
    });
}

// Função para bloquear a votação
function bloquearVotacao() {
    fetch('/bloquear-votacao', { // Substitua pela URL do seu back-end
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Votação bloqueada com sucesso!');
        } else {
            alert('Erro ao bloquear votação.');
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
    });
}

// Função para cadastrar um candidato
function cadastrarCandidato() {
    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;
    const foto = document.getElementById('foto').files[0];

    if (!nome || !numero || !foto) {
        alert('Preencha todos os campos e selecione uma foto.');
        return;
    }

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('numero', numero);
    formData.append('foto', foto);

    fetch('/cadastrar-candidato', { // Substitua pela URL do seu back-end
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Candidato cadastrado com sucesso!');
            document.getElementById('nome').value = '';
            document.getElementById('numero').value = '';
            document.getElementById('foto').value = '';
        } else {
            alert('Erro ao cadastrar candidato.');
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
    });
}

// Função para gerar relatório de votos
function gerarRelatorio() {
    fetch('/gerar-relatorio', { // Substitua pela URL do seu back-end
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            exibirGrafico(data.votos);
        } else {
            alert('Erro ao gerar relatório.');
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
    });
}

// Função para exibir o gráfico de votos
function exibirGrafico(votos) {
    const grafico = document.getElementById('grafico');
    grafico.innerHTML = ''; // Limpa o conteúdo anterior

    // Exemplo simples de gráfico usando divs
    votos.forEach(candidato => {
        const barra = document.createElement('div');
        barra.style.width = `${candidato.votos * 10}px`; // Ajuste conforme necessário
        barra.style.height = '20px';
        barra.style.backgroundColor = 'blue';
        barra.style.marginBottom = '5px';
        barra.innerText = `${candidato.nome}: ${candidato.votos} votos`;
        grafico.appendChild(barra);
    });
}

// Função para liberar votos brancos e nulos
function liberarBrancoNulo() {
    fetch('/liberar-branco-nulo', { // Substitua pela URL do seu back-end
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Votos brancos e nulos liberados com sucesso!');
        } else {
            alert('Erro ao liberar votos brancos e nulos.');
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
    });
}

// Função para bloquear votos brancos e nulos
function bloquearBrancoNulo() {
    fetch('/bloquear-branco-nulo', { // Substitua pela URL do seu back-end
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Votos brancos e nulos bloqueados com sucesso!');
        } else {
            alert('Erro ao bloquear votos brancos e nulos.');
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
    });
}
