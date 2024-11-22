<?php

$id_jogo = $_GET['id_jogo'];

require_once "conexao.php";
$conexao = conectar();
$sql = "DELETE FROM jogo WHERE id_jogos = $id_jogo";
$retorno = executarSQL($conexao, $sql);
echo json_encode($retorno);
