<?php

require_once "conexao.php";
$conexao = conectar();

$jogo = json_decode(file_get_contents("php://input"));
$sql = "UPDATE jogo SET
        nome='$jogo->nome', 
        categoria='$jogo->categoria', 
        descricao='$jogo->descricao'
        WHERE id_jogos=$jogo->id_jogos";

executarSQL($conexao, $sql);

echo json_encode($jogo);
