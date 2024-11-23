<!DOCTYPE html>
<html lang="pt_BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD JS</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection"/>
</head>

<body>
  <?php include "header.php" ?>
    <main class="container" style="margin-top: 8vh;">
    <form onsubmit="return salvarJogo(event);">
        <label>ID: <input type="number" name="id_jogos"></label><br>
        <label>Nome: <input type="text" name="nome" required></label><br>
        <label>Categoria: <input type="text" name="categoria" required></label><br>
        <label>Descrição: <input type="text" name="descricao" required></label><br><br><br>
        <div class="botoes" style="text-align: center;">
        <input type="submit" class="black btn" style="text-align:center;"><br><br>
        <a href="relatorio.php" class="black btn">Gerar Relatorio</a>
        </div>
    </form>
    <br>
    <table class="highlight">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Descrição</th>
        </tr>
      </thead>
        <tbody id="jogos"></tbody>
    </table>
    <div id="modal" class="modal">
    <div class="modal-content">   
      <h2> Atenção! </h2>
      <p>Você confirma a exclusão do cliente?</p>
    </div>

    <div class="modal-footer"> 
     <form action = "excluir.php" method ="POST">
     <input type = "hidden" name ="id" value="">    
    
     <button type="submit" name="btn-deletar" class="modal-action modal-close waves-red btn red darken-1"> 
      Excluir </button>

      <button type="button" name="btn-cancelar" class="modal-action modal-close  btn waves-light green"> 
      Cancelar </button> 
    </main>
    <script src="script.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
</body>

</html>