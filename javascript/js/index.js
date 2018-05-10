/*var hola = '¿Cómo te llamas?';
var respuesta = prompt(hola);
if (respuesta) {
    alert('Bienvenid@ "'+respuesta+'"');
} else {
    alert('Bienvenid@ "Anonymous"');
}*/



/*var sumar = function (a, b) {
    return a+b;
};*/
/*
window.onload = function () {
    var boton = document.getElementById('btn');
    boton.onclick = function(e) {
        var resp = confirm('¿Realmente deseas borrar el botón?');
        if (resp) {
            console.log(e);
            var parrafo = e.srcElement.parentElement;
            parrafo.removeChild(boton);
        }
        
    }
}//*/

$(function() {
    var cont = $('.contenedor');
    cont.load('tabla.php', function() {
        var campo = $('#filtro');
        campo.on('keyup', function(e) {
            var txt = $(this).val().toUpperCase();
            //alert(txt);
            $("table tr td.busca").filter(function() {
                return $(this).text().toUpperCase().indexOf(txt) == -1;
            }).closest('tr').hide();
            $("table tr td.busca").filter(function() {
                return $(this).text().toUpperCase().indexOf(txt) > -1;
            }).closest('tr').show();
            /*if (txt=='') {
                $('tr').show();
            }//*/
        });
    });
    
    
    cont.on('click', '.borrar', function(e) {
        var resp = confirm('¿Realmente deseas borrar el registro?');
        if (resp) {
            console.log(e);
            var boton = $(this);
            var data  = boton.attr('data');
            var datos = {id: data};
            $.post('borrar.php', datos, function(respuesta) {
                if (respuesta.indexOf('exitosamente')>-1) {
                    var tr = boton.closest('tr');
                    tr.hide('fast', function() {
                        $(this).remove();
                    });
                } else {
                    alert(respuesta);
                }
            });
        }
    });
    
    var contForma = $('.forma');
    contForma.load('forma.php', function() {
        var cont = $(this);
        var form = $('#inserta', cont);
        var config = {func: function(respuesta){
            if (respuesta.indexOf('exitosamente')>-1) {
                $('.contenedor').load('tabla.php');
            } else {
                $('body').liga('alerta', respuesta);
            }
        }, reg: {
            'nombre': {
                requerido : true,
                msj       : 'Escribe tu nombre, no debe ser vacío'
            },
            'contraseña' : {
                requerido: true,
                //patron: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
                cond: 'valor.length>6',
                msj: 'Debe tener 2 mayúsculas, un caracter especial, 2 dígitos, 3 minúsculas (no más de 8 caracteres)y '
            }
        }};
        form.liga('AJAX', config);
        // Formulario de modificar
        var form2 = $('#modifica', cont);
        var config2 = {func: function(respuesta){
            if (respuesta.indexOf('exitosamente')>-1) {
                $('.contenedor').load('tabla.php');
            } else {
                $('body').liga('alerta', respuesta);
            }
        }, reg: {
            'nombre': {
                //requerido : true,
                msj       : 'Escribe tu nombre, no debe ser vacío'
            },
            'contraseña' : {
                //requerido: true,
                //patron: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
                cond: 'valor.length>6',
                msj: 'Debe tener 2 mayúsculas, un caracter especial, 2 dígitos, 3 minúsculas (no más de 8 caracteres)y '
            }
        }};
        form2.liga('AJAX', config2);
    });
    /*
    contForma.on('submit', 'form', function(e) {
        var forma = $(this);
        var nombre = $('#nombre', forma).val();
        if (nombre && nombre.trim()) {
            var datos = forma.serialize();
            $.post('insertar.php', datos, function(respuesta) {
                if (respuesta.indexOf('exitosamente')>-1) {
                    $('.contenedor').load('tabla.php');
                } else {
                    alert(respuesta);
                }
            });
        } else {
            alert('Error en el nombre!');
        }
        
        e.preventDefault();
    });//*/
    //$('body').liga('alerta', 'Hola mundo desde LIGA.js');

});



