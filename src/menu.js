import $ from 'jquery';

$(document).ready(main); /* hasta que el documento esté cargado */

var contador = 1;
var submenu = 0;

function main(){
    $('.menu_bar').click(function(){
        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador=0;
        } else {
            $('nav').animate({
                left: '-100%'
            });
            contador=1;
        }
    });

    // mostramos y ocultamos submenús
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
        submenu = 1;
    });
};

