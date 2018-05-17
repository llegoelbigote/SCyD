<?php
 require_once 'LIGA3/LIGA.php';
 //BD('localhost', 'root', '', 'base');
 $liga = LIGA('base.usuarios');
 $campos = array('nombre',
  'contraseña'=>'<input type="password" name="contraseña" id="contraseña" />');
 $atributos = array('form'=>'id="inserta" action="insertar.php" method="POST"');
 HTML::forma($liga, 'Nuevo usuario', $campos, $atributos);
 
 $props = array('option'=>'value="@[0]"', 'select'=>'id="xcual" name="cual"');
 
 $cual = HTML::selector($liga, '@[1] (@[0])', $props);
 
 $campos = array('cual'=>$cual,
                 'nombre',
                 'contraseña'=>'<input type="password" name="contraseña" id="xcontraseña" />');
 $atributos = array(//'form'=>'id="modifica" action="modificar.php" method="POST"',
                    'form'=>array('id'=>'modifica', 'action'=>'modificar.php', 'method'=>'POST'),
                    'prefid'=>'x');
 HTML::forma($liga, 'Modificar usuario', $campos, $atributos);
