// Owl Carousel 2
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      loop: true
    });
});

// Nav Plugin (side pagination)
$('#page-nav').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 100,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing',
  begin: function () { },
  end: function () { },
  scrollChange: function ($currentListItem) { }
});