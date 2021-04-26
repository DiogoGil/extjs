<?php

    include("Conectar.php");
    $query = mysql_query("SELECT * FROM Contato") or die (mysql_error());

    $rows = array();
    whiler($contato = mysql_fetch_assoc($query)) {
        $rows [] = $contato;
    }

    echo json_encode($rows);
?>