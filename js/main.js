$(window).on("load",function(){
    $('.flexslider').flexslider({
        animation: "slide",
        touch: true
      });
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
var hora=f.getHours();
var saludo;
if(hora >= 0 && hora < 12)
{
    saludo="Buenos dias,";
}
else if(hora >= 12 && hora < 18)
{
    saludo="Buenas tardes,";
}
else if(hora >= 18 && hora < 24)
{
    saludo="Buenas noches,";
}
$('.date-span').html(saludo+' hoy es '+(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()));
});
