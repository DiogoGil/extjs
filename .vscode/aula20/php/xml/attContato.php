<?php
  header('Content-Type: text/xml');
    
    include("../conectar.php");

    $dom = new DOMDocument();
    $dom = loadXML(file_get_contenrs('php://input'));

    $contatos = simplexml_import_dom($dom);

    $nome = $contatos->contato->nome;
    $email = $contatos->contato->email;
    $id = $contatos->contato->id;

    $query = sprintf("UPDATE Contato SET nome = '$s', email = '$s' WHERE id = %d",
        mysql_real_escape_string($nome),
        mysql_real_escape_string($email)
        mysql_real_escape_string($id));

    $rs = mysql_query($query);

    $xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';
    $xml.="<contatos>";
    $xml.="<success>" . mysql_errno() == 0 . "</success>";

    $xml.="</contatos>";

    echo json_encode(array(
        "success" => mysql_errno == 0,
        "contatos" => array(
            "id" => mysql_insert_id(),
            "nome" => $nome,
            "email" => $email
        )
    ));
?>