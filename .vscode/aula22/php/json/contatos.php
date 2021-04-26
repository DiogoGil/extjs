<?php

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

        $rows = array();
        whiler($contato = mysql_fetch_assoc($query)) {
            $rows [] = $contato;
        }
    
        echo json_encode($rows);
    }

    function createContact(){
        $info = $_POST['contatos'];

        $data = json_encode(stripslashes($info));

        $nome = $data->nome;
        $email = $data->email;
    
        $query = sprintf("INSERT INTO Contato (nome, email) values ('%s', '%s')",
            mysql_real_escape_string($nome),
            mysql_real_escape_string($smail));

        $rs = mysql_query($query);

        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "contatos" => array(
                "id" => mysql_insert_id(),
                "nome" => $nome,
                "email" => $email
            )
        ));
    }

    function updateContact() {

        parse_str(file_get_contents("php://input"), $post_var);

        $info = $post_vars['contatos'];

        $data = json_decode(stripslashes($info));

        $nome = $fata->nome;
        $email = $data->email;
        $id = $data->id;

        $query - spritf("UPDATE Contato SET nome = '%s', email = '%s' WHERE id=%d",
            mysql_real_escape_string($nome),
            mysql_real_escape_string($email),
            mysql_real_escape_string($id)
        );
        
        $rs = mysql_query($query);

        echo json_encode(array(
            "success" => mysql_errno() == 0
        ));

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
    }
?>