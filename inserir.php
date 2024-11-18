<?php

require_once "conexao.php";
$conexao = conectar();

$jogo = json_decode(file_get_contents("php://input"));
$sql = "INSERT INTO jogo 
        (nome, categoria, descricao)
        VALUES 
        ('$jogo->nome', 
        '$jogo->categoria', 
        '$jogo->descricao')";

executarSQL($conexao, $sql);

$jogo->id_jogos = mysqli_insert_id($conexao);
echo json_encode($jogo);
