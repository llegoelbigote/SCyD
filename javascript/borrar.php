<?php
 require_once 'LIGA3/LIGA.php';
 //BD('localhost', 'root', '', 'base');
 $liga = LIGA('base.usuarios');
 $id = $_POST['id'];
 $resp = $liga->eliminar($id);
 if ($resp == 1) {
    echo 'Registro borrado exitosamente';
 } else {
    echo "Error: '$resp'";
 }
?>