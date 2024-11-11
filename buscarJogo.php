<?php

$id = $_GET['id'];

require_once "conexao.php";
$conexao = conectar();

$sql = "SELECT nome, categoria, descricao FROM jogo 
        WHERE id = $id";
$resultado = executarSQL($conexao, $sql);
$usuario = mysqli_fetch_assoc($resultado);
echo json_encode($usuario);