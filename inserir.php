<?php

require_once "conexao.php";
$conexao = conectar();

$usuario = json_decode(file_get_contents("php://input"));
$sql = "INSERT INTO jogo 
        (nome, categoria, descricao)
        VALUES 
        ('$usuario->nome', 
        '$usuario->categoria', 
        '$usuario->descricao')";

executarSQL($conexao, $sql);

$usuario->id_jogos = mysqli_insert_id($conexao);
echo json_encode($usuario);