<?php
  header('Content-Type: text/xml');
    
    include("../conectar.php");

    $dom = new DOMDocument();
    $dom = loadXML(file_get_contenrs('php://input'));

    $contatos = simplexml_import_dom($dom);

    $nome = $contatos->contato->nome;
    $email = $contatos->contato->email;

    $query = sprintf("INSERT INTO Contato (nome, email) values ('%s', '%s')",
        mysql_real_escape_string($nome),
        mysql_real_escape_string($email));

    $rs = mysql_query($query);

    $xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';
    $xml.="<contatos>";
    $xml.="<success>" . mysql_errno() == 0 . "</success>";

        $xml.=  "<contato>";
        $xml.=      "<id>" . $contato['id']. "</id>";
        $xml.=      "<nome>" . $contato['nome']. "</nome>";
        $xml.=      "<email>". $contato['email']. "</email>";
        $xml.=  "</contato>";
    } 

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