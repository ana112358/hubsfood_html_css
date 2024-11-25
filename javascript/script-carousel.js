
const TOTAL_CAROUSELS = 100;

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

  for (let i = 1; i <= TOTAL_CAROUSELS; i++) {
      $(`#carousel${i}-prev`).click(function() {
        $(`#carousel${i}`).trigger('prev.owl.carousel');
      });

      $(`#carousel${i}-next`).click(function() {
        $(`#carousel${i}`).trigger('next.owl.carousel');
      });
    }
    
});