// Mobile (toggle) menu
$(document).ready(function() {
  const menuToggle = document.querySelector('.toggle-menu');
  const mobMenu = document.querySelector('.nav-menu-mobile');
  const overlayEl = document.querySelector('#overlay');
  const bodyEl = document.body;

  // Clicking to Hamburger icon
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobMenu.classList.toggle('active');
    overlayEl.classList.toggle('active');
    bodyEl.classList.toggle('noscroll');
  });

  // Clicking to mobile menu window
  mobMenu.addEventListener('click', function() {
    this.classList.remove('active');
    menuToggle.classList.remove('active');
    overlayEl.classList.remove('active');
    bodyEl.classList.remove('noscroll');
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

// Owl Carousel 2
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      loop: true
    });
});
