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
    for (const jogo of jogos) {
        inserirJogo(jogo);
    }
}

function inserirJogo(jogo) {
    let tbody = document.getElementById('usuarios'); 
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
    btnAlterar.id = jogo.id_jogos;
    tdAlterar.appendChild(btnAlterar);
    let tdExcluir = document.createElement('td');
    let btnExcluir = document.createElement('button');
    btnExcluir.addEventListener("click", excluir, false);
    btnExcluir.id = jogo.id_jogos;
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
    let id_jogo = evt.currentTarget.id;
    let excluir = confirm("Você tem certeza que deseja excluir este jogo?");
    if (excluir) {
        fetch('excluir.php?id=' + id_jogo, {
            method: "GET",
            headers: { 'Content-Type': "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(retorno => excluirJogo(retorno, id_jogo))
            .catch(error => console.log(error));
    }
}

function excluirJogo(retorno, id_jogo) {
    if (retorno) {
        let tbody = document.getElementById('usuarios');
        for (const tr of tbody.children) {
            if (tr.children[0].innerHTML == id_jogo) {
                tbody.removeChild(tr);
                break;
            }
        }
    }
}

function buscaJogo(evt) {
    let id_jogo = evt.currentTarget.id;
    fetch('buscarJogo.php?id=' + id_jogo, {
        method: "GET",
        headers: { 'Content-Type': "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(jogo => preencheForm(jogo))
        .catch(error => console.log(error));
}

function preencheForm(jogo) {
    let inputIDJogos = document.getElementsByName("id_jogos")[0];
    inputIDJogos.value = jogo.id_jogos;
    let inputNome = document.getElementsByName("nome")[0];
    inputNome.value = jogo.nome;
    let inputCategoria = document.getElementsByName("categoria")[0];
    inputCategoria.value = jogo.categoria;
    let inputDescricao = document.getElementsByName("descricao")[0];
    inputDescricao.value = jogo.descricao;
}

function salvarJogo(event) {
    event.preventDefault();
    let inputIDJogos = document.getElementsByName("id_jogos")[0];
    let id_jogos = inputIDJogos.value;
    let inputNome = document.getElementsByName("nome")[0];
    let nome = inputNome.value;
    let inputCategoria = document.getElementsByName("categoria")[0];
    let categoria = inputCategoria.value;
    let inputDescricao = document.getElementsByName("descricao")[0];
    let descricao = inputDescricao.value;

    if (id_jogos === "") {
        cadastrar(nome, categoria, descricao);
    } else {
        alterar(nome, categoria, descricao);
    }
    document.getElementsByTagName('form')[0].reset();
}

function cadastrar(nome, categoria, descricao) {
    fetch('inserir.php', {
        method: 'POST',
        body: JSON.stringify({
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

function alterarJogo(jogo) {
    let tbody = document.getElementById('usuarios');
    for (const tr of tbody.children) {
        if (tr.children[0].innerHTML == jogo.id_jogos) {
            tr.children[1].innerHTML = jogo.nome;
            tr.children[2].innerHTML = jogo.categoria;
            tr.children[3].innerHTML = jogo.descricao;
        }
    }
}