let nomeDosAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value.trim().toLowerCase();
    nomeDoAmigo = nomeDoAmigo.charAt(0).toUpperCase() + nomeDoAmigo.slice(1);
    if (nomeDoAmigo === "") {
        alert("O nome do amigo não pode estar vazio.");
        return;
    }
    if (nomeDosAmigos.includes(nomeDoAmigo)) {
        alert("O nome do amigo já está na lista.");
        return;
    }
    // Adiciona o nome do amigo à lista de amigos
    nomeDosAmigos.push(nomeDoAmigo); 
    console.log(nomeDosAmigos);
    limparCampo();
    atualizarListaDeAmigos();
    limparResultado();
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

function atualizarListaDeAmigos() {
    // Seleciona o elemento <ul> do documento e o armazena na variável listaDeAmigos
    let listaDeAmigos = document.querySelector('ul');
    
    // Limpa o conteúdo HTML do elemento <ul>, removendo todos os itens da lista
    listaDeAmigos.innerHTML = '';
    
    // Itera sobre cada nome na lista nomeDosAmigos
    nomeDosAmigos.forEach(function(nomeDoAmigo) {
        // Cria um novo elemento <li> para cada nome
        let item = document.createElement('li');
        
        // Define o texto do item <li> como o nome do amigo atual
        item.textContent = nomeDoAmigo;
        
        // Adiciona o item <li> ao elemento <ul>
        listaDeAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    // Verifica se há amigos disponíveis no array
    if (nomeDosAmigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * nomeDosAmigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = nomeDosAmigos[indiceAleatorio];

    // Mostra o resultado
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;

    // Reseta a lista de amigos
    nomeDosAmigos = [];
    atualizarListaDeAmigos();
}

function limparResultado() {
    document.getElementById('resultado').innerHTML = '';
}