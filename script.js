document.addEventListener("DOMContentLoaded", () => {
    listarTodos();
});

function listarTodos() {
    fetch("listar.php",
        {
            method: "GET",
            headers: { 'Content-Type': "application/json; charset=UTF-8" }
        }
    )
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
    btnAlterar.addEventListener("click", buscaUsuario, false);
    btnAlterar.id_usuario = jogo.id_jogos;
    tdAlterar.appendChild(btnAlterar);
    let tdExcluir = document.createElement('td');
    let btnExcluir = document.createElement('button');
    btnExcluir.addEventListener("click", excluir, false);
    btnExcluir.id_usuario = jogo.id_jogos;
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
    let id_usuario = evt.currentTarget.id_usuario;
    let excluir = confirm("Você tem certeza que deseja excluir este usuário?");
    if (excluir == true) {
        fetch('excluir.php?id_usuario=' + id_usuario,
            {
                method: "GET",
                headers: { 'Content-Type': "application/json; charset=UTF-8" }
            }
        )
            .then(response => response.json())
            .then(retorno => excluirUsuario(retorno, id_usuario))
            .catch(error => console.log(error));
    }
}

function excluirUsuario(retorno, id_usuario) {
    if (retorno == true) {
        let tbody = document.getElementById('jogos');
        for (const tr of tbody.children) {
            if (tr.children[0].innerHTML == id_usuario) {
                tbody.removeChild(tr);
            }
        }
    }
}

function alterarUsuario(jogo) {
    let tbody = document.getElementById('jogos');
    for (const tr of tbody.children) {
        if (tr.children[0].innerHTML == jogo.id_usuario) {
            tr.children[1].innerHTML = jogo.nome;
            tr.children[2].innerHTML = jogo.email;
        }
    }
}

function buscaUsuario(evt) {
    let id_usuario = evt.currentTarget.id_usuario;
    fetch('buscaUsuario.php?id_usuario=' + id_usuario,
        {
            method: "GET",
            headers: { 'Content-Type': "application/json; charset=UTF-8" }
        }
    )
        .then(response => response.json())
        .then(jogo => preencheForm(jogo))
        .catch(error => console.log(error));
}

function preencheForm(jogo) {
    let inputIDUsuario = document.getElementsByName("id_usuario")[0];
    inputIDUsuario.value = jogo.id_usuario;
    let inputNome = document.getElementsByName("nome")[0];
    inputNome.value = jogo.nome
    let inputEmail = document.getElementsByName("email")[0];
    inputEmail.value = jogo.email;
}

function salvarJogo(event) {
    // parar o comportamento padrão do form
    event.preventDefault();
    let inputIDJogo = document.getElementsByName("id_jogos")[0];
    let id_jogos = inputIDJogo.value;

    let inputNome = document.getElementsByName("nome")[0];
    let nome = inputNome.value;
    let inputCategoria = document.getElementsByName("categoria")[0];
    let categoria = inputCategoria.value;
    let inputDescricao = document.getElementsByName("descricao")[0];
    let descricao = inputDescricao.value;

    if (id_jogos == "") {
        cadastrar(id_jogos, nome, categoria, descricao);
    } else {
        alterar(id_usuario, nome, email, senha);
    }
    document.getElementsByTagName('form')[0].reset();
}

function cadastrar(id_jogos, nome, categoria, descricao) {
    fetch('inserir.php',
        {
            method: 'POST',
            body: JSON.stringify({
                id_jogos: id_jogos,
                nome: nome,
                categoria: categoria,
                descricao: descricao
            }),
            headers: { 'Content-Type': "application/json; charset=UTF-8" }
        }
    )
        .then(response => response.json())
        .then(jogo => inserirJogo(jogo))
        .catch(error => console.log(error));
}

function alterar(id_usuario, nome, email, senha) {
    fetch('alterar.php',
        {
            method: 'POST',
            body: JSON.stringify({
                id_usuario: id_usuario,
                nome: nome,
                email: email,
                senha: senha
            }),
            headers: { 'Content-Type': "application/json; charset=UTF-8" }
        }
    )
        .then(response => response.json())
        .then(jogo => alterarUsuario(jogo))
        .catch(error => console.log(error));
}