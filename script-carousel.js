$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 4,              // Número de itens visíveis por vez
      loop: true,            // Loop contínuo
      margin: 10,            // Espaçamento entre itens
      nav: false,             // Desativando os controles padrão
      dots: true,
      autoplay: true,        // Ativa o autoplay
      autoplayTimeout: 3000  // Intervalo entre transições
    });

    $(".custom-prev").click(function() {
        $(".owl-carousel").trigger('prev.owl.carousel');
      });
    
      $(".custom-next").click(function() {
        $(".owl-carousel").trigger('next.owl.carousel');
      });
  });