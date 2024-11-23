<?php
 $paginaCorrente = basename($_SERVER['SCRIPT_NAME']);
 //echo $pagina_corrente;
 ?>

<div class="navbar-fixed">    
    <nav class="black">
    <div class="nav-wrapper container">
      <a href="index.php" class="brand-logo"><img src="imagens/controle.png" height="55" width="60"></a>
      <ul class="right hide-on-med-and-down">
        <li> <a class="white-text" <?php if($paginaCorrente == 'index.php'){echo 'style="text-decoration: underline;"';} ?> href="index.php">Home</a></li>    
        <li> <a class="white-text" <?php if($paginaCorrente == 'principal.php'){echo 'style="text-decoration: underline;"';} ?> href="principal.php">Gerenciar</a></li> 
    </ul>
    </div>
  </nav>
</div>