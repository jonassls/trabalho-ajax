<?php

$id_jogo = $_GET['id_jogo'];

require_once "conexao.php";
$conexao = conectar();

$sql = "SELECT id_jogos, nome, categoria, descricao FROM jogo 
        WHERE id_jogos = $id_jogo";
$resultado = executarSQL($conexao, $sql);
$jogos = mysqli_fetch_assoc($resultado);
echo json_encode($jogos);
