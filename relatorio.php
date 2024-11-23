<?php
require_once "conexao.php";
require 'dompdf/autoload.inc.php';
use Dompdf\Dompdf;
use Dompdf\Options;
$conexao = conectar();


$options = new Options();

$options->set('isRemoteEnabled', true); 
$dompdf = new Dompdf($options);

$dados = '
<html>
<head>
<link rel="StyleSheet" type="Text/css" href="estilo.css">
<style>
body
 { font-family: Arial, sans-serif; }
h1
{
	color:black;
}
table {
  border-collapse: collapse;
  width: 100%;
}
td,th {
  text-align: left;
  padding: 10px;
}
tr:nth-child(even)
	{background-color: #f2f2f2}
thead 
{
  background-color: black;
  color: white;
}
</style>
</head>
<body>
';

$dados .= "<h1 style='text-align: center;text-decoration: underline;'> Relatório de jogos </h1> <br><br>";

$dados .= "<table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Categoria</th>
			    <th>Descrição </th>             
          </tr>
        </thead>
        <tbody>";
        
  $sql = "SELECT * FROM jogo";
  $resultado = mysqli_query($conexao,$sql); 
  while($linha = mysqli_fetch_assoc($resultado))
  {
	  $dados .= "<tr>";
    $dados .= '<td>' . $linha['id_jogos'] . '</td>';
	  $dados .= '<td>'. $linha['nome'] . '</td>'; 
	  $dados .= '<td>' . $linha['categoria'] . '</td>'; 
	  $dados .= '<td>' . $linha['descricao'] . '</td>'; 
	  $dados .= "</tr>";     
  }       
	$dados .= "</tbody>";
	$dados .= "</table>";
	$dados .= "</body> </html>";



$dompdf->loadHtml($dados);

$dompdf->setPaper('A4', 'portrait');


$dompdf->render();


$dompdf->stream("relatorio.pdf", ["Attachment" => false]); 
?>