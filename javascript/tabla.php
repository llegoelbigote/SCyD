<?php
 require_once 'LIGA3/LIGA.php';
 //BD('localhost', 'root', '', 'base');
 $liga = LIGA('base.usuarios');
 $cols = array('id','nombre','fecha','Acciones'=>'button class="borrar" data="@[0]"><img scr="bigote.ico" >/button>');
 
 echo '<label>Filtro: <input id="filtro" name="filtro" /></label>';
 
 $props = array('id'=>array('class'=>'busca'));
 
 HTML::tabla($liga, 'Usuarios registrados', $cols, $props);
?>
