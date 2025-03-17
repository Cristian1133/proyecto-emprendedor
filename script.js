$(document).ready(function() {
    // Eventos de clic para el análisis FODA
    $(".fortalezas-header").click(function() {
        $(".fortalezas-row .descripcion").slideToggle();
    });
    $(".debilidades-header").click(function() {
        $(".debilidades-row .descripcion").slideToggle();
    });
    $(".oportunidades-header").click(function() {
        $(".oportunidades-row .descripcion").slideToggle();
    });
    $(".amenazas-header").click(function() {
        $(".amenazas-row .descripcion").slideToggle();
    });

    // Eventos de clic para el análisis PESTEL
    $(".politicos-header").click(function() {
        $(".politicos-row .descripcion").slideToggle();
    });
    $(".economicos-header").click(function() {
        $(".economicos-row .descripcion").slideToggle();
    });
    $(".sociales-header").click(function() {
        $(".sociales-row .descripcion").slideToggle();
    });
    $(".tecnologicos-header").click(function() {
        $(".tecnologicos-row .descripcion").slideToggle();
    });
    $(".ecologicos-header").click(function() {
        $(".ecologicos-row .descripcion").slideToggle();
    });
    $(".legales-header").click(function() {
        $(".legales-row .descripcion").slideToggle();
    });

    // Eventos de clic para las estrategias
    $(".estrategia-titulo").click(function() {
        $(this).next(".estrategia-contenido").slideToggle();
    });

    // Eventos de clic para mostrar/ocultar las tablas FODA y PESTEL
    $(".foda-container .tabla-header").click(function() {
        $(".foda-container table").slideToggle();
    });
    $(".pestel-container .tabla-header").click(function() {
        $(".pestel-container table").slideToggle();
    });

    // Eventos mouseover y mouseout para mostrar información adicional en FODA y PESTEL
    $(".fortalezas-header, .debilidades-header, .oportunidades-header, .amenazas-header, " +
      ".politicos-header, .economicos-header, .sociales-header, .tecnologicos-header, " +
      ".ecologicos-header, .legales-header").mouseover(function() {
        $(this).find(".info-adicional").show();
    }).mouseout(function() {
        $(this).find(".info-adicional").hide();
    });

    $(document).ready(function() {
        $(".conclusion-header").click(function() {
            $(".conclusion-contenido").slideToggle();
            $(this).find(".toggle-icon").toggleClass("rotated"); // Agrega o quita la clase al icono
        });
    
        // Ocultar la conclusión al cargar la página
        $(".conclusion-contenido").hide();
    });
    
   
    
});