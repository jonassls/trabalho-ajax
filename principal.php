<!DOCTYPE html>
<html lang="pt_BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD JS</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
</head>

<body>
    <form onsubmit="return salvarUsuario(event);">
        <label>Nome: <input type="text" name="nome"></label><br>
        <label>Categoria: <input type="text" name="categoria"></label><br>
        <label>Descrição: <input type="text" name="descricao"></label><br>
        <input type="submit" value="Salvar Usuário">
    </form>
    <br>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Descrição</th>
                <th colspan="2">Opções</th>
            </tr>
        </thead>
        <tbody id="usuarios"></tbody>
    </table>

    <script src="script.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
</body>

</html>