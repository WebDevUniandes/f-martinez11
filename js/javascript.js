var activarWayPoints = true;
var contenedor = $('.primera-seccion');
contenedor.waypoint(
  function (direction)
  {
    if(activarWayPoints)
    {
      if(direction == 'down')
      {
        contenedor.addClass('featurette-fade');
      }else
      {
        contenedor.removeClass('featurette-fade');
      }
    }
  },{offset:'80%'});

  var contenedor2 = $('.segunda-seccion');
  contenedor2.waypoint(
    function (direction)
    {
      if(activarWayPoints)
      {
        if(direction == 'down')
        {
          contenedor2.addClass('featurette-fade');
        }else
        {
          contenedor2.removeClass('featurette-fade');
        }
      }
    },{offset:'80%'});

 var elementoAcademicoEscondido = $('.mas-academico');
 var mostrarElementoAcademico = function ()
 {
   document.getElementById('estudios').style.display='none';
   document.getElementById('sobre_mi').style.display='none';
   document.getElementById('about').style.display='none';
   document.getElementById('services').style.display='none';
   document.getElementById('encabezado').style.display='none';
   document.getElementById('nav_lista').style.display='none';
   document.getElementById('nav_inicio').style.display='none';
   document.getElementById('nav_volver').style.display='block';
   document.getElementById('mas_academico').style.display = 'block';
 }
 var ocultarElementoAcademico = function ()
 {
   document.getElementById('about').style.display='block';
   document.getElementById('estudios').style.display='block';
   document.getElementById('sobre_mi').style.display='block';
   document.getElementById('services').style.display='block';
   document.getElementById('encabezado').style.display='block';
   document.getElementById('nav_lista').style.display='block';
   document.getElementById('nav_inicio').style.display='block';
   document.getElementById('nav_volver').style.display='none';
   document.getElementById('mas_academico').style.display = 'none';
 }
 var mostrarElementoHobbie = function ()
 {
   document.getElementById('estudios').style.display='none';
   document.getElementById('sobre_mi').style.display='none';
   document.getElementById('about').style.display='none';
   document.getElementById('services').style.display='none';
   document.getElementById('encabezado').style.display='none';
   document.getElementById('nav_lista').style.display='none';
   document.getElementById('nav_inicio').style.display='none';
   document.getElementById('hobbies-contenedor').style.display='block';
   document.getElementById('nav_volver').style.display='block';
 }
 var ocultarElementoHobbie = function ()
 {
   document.getElementById('about').style.display='block';
   document.getElementById('estudios').style.display='block';
   document.getElementById('sobre_mi').style.display='block';
   document.getElementById('services').style.display='block';
   document.getElementById('encabezado').style.display='block';
   document.getElementById('nav_lista').style.display='block';
   document.getElementById('nav_inicio').style.display='block';
   document.getElementById('hobbies-contenedor').style.display='none';
   document.getElementById('nav_volver').style.display='none';
 }
