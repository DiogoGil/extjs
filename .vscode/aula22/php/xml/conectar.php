<?php

$servidor = "127.0.0.1";

$user = "root";

$senha = "root";

$db = "cursoextjs4";

$conexao = mysql_connect($servidor,$user,$senha) or die(mysql_error());

$banco = mysql_select_db($db, $conexao) or die(mysql_error());

?>