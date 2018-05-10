<?php
 require_once 'LIGA3/LIGA.php';
 //BD('localhost', 'root', '', 'base');
 $liga = LIGA('base.usuarios');
 $resp = $liga->insertar($_POST);
 if ($resp == 1) {
    echo 'Registro insertado exitosamente';
 } else {
    echo "Error: '$resp'";
 }