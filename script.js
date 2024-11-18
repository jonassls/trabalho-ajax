document.addEventListener("DOMContentLoaded", () => {
    listarTodos();
});

function listarTodos() {
    fetch("listar.php", {
        method: "GET",
        headers: { 'Content-Type': "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(jogos => inserirJogos(jogos))
        .catch(error => console.log(error));
}

function inserirJogos(jogos) {
    jogos.forEach(jogo => inserirJogo(jogo));
}

function inserirJogo(jogo) {
    let tbody = document.getElementById('jogos');
    let tr = document.createElement('tr');
    
    let tdId = document.createElement('td');
    tdId.innerHTML = jogo.id_jogos;
    
    let tdNome = document.createElement('td');
    tdNome.innerHTML = jogo.nome;
    
    let tdCategoria = document.createElement('td');
    tdCategoria.innerHTML = jogo.categoria;
    
    let tdDescricao = document.createElement('td');
    tdDescricao.innerHTML = jogo.descricao;
    
    let tdAlterar = document.createElement('td');
    let btnAlterar = document.createElement('button');
    btnAlterar.innerHTML = "Alterar";
    btnAlterar.addEventListener("click", buscaJogo, false);
    btnAlterar.id_jogo = jogo.id_jogos; 
    tdAlterar.appendChild(btnAlterar);
    
    let tdExcluir = document.createElement('td');
    let btnExcluir = document.createElement('button');
    btnExcluir.addEventListener("click", excluir, false);
    btnExcluir.id_jogo = jogo.id_jogos;
    btnExcluir.innerHTML = "Excluir";
    tdExcluir.appendChild(btnExcluir);
    
    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdCategoria);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdAlterar);
    tr.appendChild(tdExcluir);
    
    tbody.appendChild(tr);
}

function excluir(evt) {
    let id_jogos = evt.currentTarget.id_jogos;  
    let excluir = confirm("Você tem certeza que deseja excluir este jogo?");
    if (excluir) {
        fetch('excluir.php?id_jogo=' + id_jogos, { 
            method: "GET",
            headers: { 'Content-Type': "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(retorno => excluirJogo(retorno, id_jogos))
            .catch(error => console.log(error));
    }
}

function excluirJogo(retorno, id_jogos) {
    if (retorno === true) {
        let tbody = document.getElementById('jogos');
        for (const tr of tbody.children) {
            if (tr.children[0].innerHTML == id_jogos) {
                tbody.removeChild(tr);
            }
        }
    }
}

function alterarJogo(jogo) {
    let tbody = document.getElementById('jogos');
    for (const tr of tbody.children) {
        if (tr.children[0].innerHTML == jogo.id_jogo) { 
            tr.children[1].innerHTML = jogo.nome;
            tr.children[2].innerHTML = jogo.categoria;
            tr.children[3].innerHTML = jogo.descricao;
        }
    }
}

function buscaJogo(evt) {
    let id_jogo = evt.currentTarget.id_jogo;  
    fetch('buscaJogo.php?id_jogo=' + id_jogo, {  
        method: "GET",
        headers: { 'Content-Type': "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(jogo => preencheForm(jogo))
        .catch(error => console.log(error));
}

function preencheForm(jogo) {
    let inputIDJogo = document.getElementsByName("id_jogos")[0];
    inputIDJogo.value = jogo.id_jogos;
    
    let inputNome = document.getElementsByName("nome")[0];
    inputNome.value = jogo.nome;
    
    let inputCategoria = document.getElementsByName("categoria")[0];
    inputCategoria.value = jogo.categoria;
    
    let inputDescricao = document.getElementsByName("descricao")[0];
    inputDescricao.value = jogo.descricao;
}

function salvarJogo(event) {
    
    event.preventDefault();
    
    let inputIDJogo = document.getElementsByName("id_jogos")[0];
    let id_jogos = inputIDJogo.value;

    let inputNome = document.getElementsByName("nome")[0];
    let nome = inputNome.value;

    let inputCategoria = document.getElementsByName("categoria")[0];
    let categoria = inputCategoria.value;

    let inputDescricao = document.getElementsByName("descricao")[0];
    let descricao = inputDescricao.value;

    if (id_jogos === "") {
        cadastrar(id_jogos, nome, categoria, descricao);
    } else {
        alterar(id_jogos, nome, categoria, descricao);  
    }

    document.getElementsByTagName('form')[0].reset();
}

function cadastrar(id_jogos, nome, categoria, descricao) {
    fetch('inserir.php', {
        method: 'POST',
        body: JSON.stringify({
            id_jogos: id_jogos,
            nome: nome,
            categoria: categoria,
            descricao: descricao
        }),
        headers: { 'Content-Type': "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(jogo => inserirJogo(jogo))
        .catch(error => console.log(error));
}

function alterar(id_jogos, nome, categoria, descricao) {
    fetch('alterar.php', {
        method: 'POST',
        body: JSON.stringify({
            id_jogos: id_jogos,
            nome: nome,
            categoria: categoria,
            descricao: descricao
        }),
        headers: { 'Content-Type': "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(jogo => alterarJogo(jogo))
        .catch(error => console.log(error));
}
