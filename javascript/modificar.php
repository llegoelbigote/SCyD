<?php
 require_once 'LIGA3/LIGA.php';
 //BD('localhost', 'root', '', 'base');
 $liga = LIGA('base.usuarios');
 $datos = array($_POST['cual']=>$_POST);
 $resp = $liga->modificar($datos);
 if ($resp == 1) {
    echo 'Registro modificado exitosamente';
 } else {
    echo "Error: '$resp'";
 }