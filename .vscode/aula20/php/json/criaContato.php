<?php

    include("../conectar.php");

    $info = $_POST['contatos'];

    $data = json_decode(stipslashes($info));

    $nome = $data->nome;
    $email = $data->email;

    $query = sprintf("INSERT INTO Contato (nome, email) values ('%s', '%s')",
        mysql_real_escape_string($nome),
        mysql_real_escape_string($email));

    $rs = mysql_query($query);

    echo json_encode(array(
        "success" => mysql_errno == 0,
        "contatos" => array(
            "id" => mysql_insert_id(),
            "nome" => $nome,
            "email" => $email
        )
    ));
?>