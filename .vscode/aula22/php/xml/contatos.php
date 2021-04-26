<?php

    header('Content-Type: text/xml');

    include("../conectar.php")

    echo ;

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            listaContatos();
            break;
        case 'POST':
            createContact();
            break;
        case 'PUT':
            updateContact();
            break;
        case 'DELETE':
            deleteContact();
            break
    }

    function listaContatos(){
       
        $query = mysql_query("SELECT * FROM Contato") or die (mysql_error());

        $xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';
        $xml.="<contatos>";

        $rows = array();
        while($contato = mysql_fetch_assoc($query)) {
            $xml.=  "<contato>";
            $xml.=      "<id>" . $contato['id']. "</id>";
            $xml.=      "<nome>" . $contato['nome']. "</nome>";
            $xml.=      "<email>". $contato['email']. "</email>";
            $xml.=  "</contato>";
        }

        $xml.= "</contatos>";

        echo $xml;
    }

    function createContact(){
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
    
        echo $xml;
    }

    function updateContact() {

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

        echo $xml
    }

    function deleteContact(){

        parse_str(file_get_contents("php://input"),$post_vars);
        $info = $post_vars['contatos'];

        $data = json_decode(stripslashes($info));

        $id = $data->id;

        $query = sprintf("DELETE FROM Contato WHERE id=%d",
            mysql_real_escape_string($id));

        $rs = mysql_query($query);

            echo json_encode(array(
            "success" => mysql_errno() == 0
        ));

    }
    
?>