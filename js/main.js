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

  // Closing mobile menu if resized screen
  window.addEventListener('resize', function(){
    mobMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    overlayEl.classList.remove('active');
    bodyEl.classList.remove('noscroll');
  });

  // Closing moble menu if clicking to overlay 
  overlayEl.addEventListener('click', function() {
    this.classList.remove('active');
    menuToggle.classList.remove('active');
    mobMenu.classList.remove('active');
    bodyEl.classList.remove('noscroll');  
  });
  
});

// Fix menu
const fixMenu = document.querySelector('.fix-menu');
window.addEventListener('scroll', function () {
	if(this.scrollY > 10) {
		fixMenu.classList.add('active');
	}
	else{
		fixMenu.classList.remove('active'); 
	}
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
      loop: true,
	  navSpeed: 500,
	  responsive: {
        0:{
            items: 1,
            dots: false,
			margin: 10,
        },

		768:{
            items: 3,
            nav: true,
			dots: false,
			margin: 12
        },

        1200:{
            items: 3,
            nav: true,
			margin: 15
        },
	  }
    });
});

// Back top button
$('#back-top').hide();
$(window).scroll( function () {
	if($(this).scrollTop() > 200) {
		$('#back-top').fadeIn();
	}
	else{
		$('#back-top').fadeOut();
	}
});

// Remove pseudo class hover from slider button
const lButton = document.querySelector('.owl-carousel');
document.addEventListener('click', function () {
	lButton.classList.add('active'); 
});
	

