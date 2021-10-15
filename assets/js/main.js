(function($) {
  "use strict";
  jQuery(document).on("ready", function() {
    //logo acrousel active
    $(".logo-carousel").owlCarousel({
      loop: true,
      nav: false,
      margin: 30,
      autoplay: true,
      autoplayspeed: 1000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 5
        }
      }
    });
    //single blog quite area  acrousel active
    $(".quite-area").owlCarousel({
      loop: true,
      nav: false,
      margin: 30,
      autoplay: true,
      autoplayspeed: 1000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    //roadmap carosusel active
    $(".roadmap-carousel").owlCarousel({
      loop: true,
      nav: true,
      margin: 30,
      autoplay: true,
      autoplayspeed: 1000,
      navText: [
        '<i class="fa fa-long-arrow-left">',
        '<i class="fa fa-long-arrow-right">'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    //faq area carousel active
    $(".faq-carousel").owlCarousel({
      loop: true,
      nav: true,
      margin: 30,
      autoplay: true,
      autoplayspeed: 1000,
      navText: [
        '<i class="fa fa-long-arrow-left">',
        '<i class="fa fa-long-arrow-right">'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    //animation active
    new WOW().init();
    //menu scrollr
    $(".main-menu li a").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var $target = $(this.hash);
        $target =
          ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
        if ($target.length) {
          var targetOffset = $target.offset().top - 60;
          $("html,body").animate({ scrollTop: targetOffset }, 1000);
          return false;
        }
      }
    });

    //scrolling menu adding active class
    var scrolllink = $(".scroll");

    $(window).scroll(function() {
      var nav = $(".content-nav");
      if (nav.length) {
        var contentNav = nav.offset().top;
        if (sectionOffset <= scrollbarLocation) {
          $(this)
            .parent()
            .addClass("active");
          $(this)
            .parent()
            .siblings()
            .removeClass("active");
        }
      }
    });
    //mobile-menu
    $("#slick-nav").slicknav({
      prependTo: ".mobile-menu",
      allowParentlinks: true
    });

    particlesJS(
      "particles-js",
			{
		  "particles": {
			"number": {
			  "value": 62,
			  "density": {
				"enable": true,
				"value_area": 800
			  }
			},
			"color": {
			  "value": "#2db7d4"
			},
			"shape": {
			  "type": "polygon",
			  "stroke": {
				"width": 0,
				"color": "#000000"
			  },
			  "polygon": {
				"nb_sides": 6
			  },
			  "image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			  }
			},
			"opacity": {
			  "value": 0.5,
			  "random": false,
			  "anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			  }
			},
			"size": {
			  "value": 10,
			  "random": true,
			  "anim": {
				"enable": false,
				"speed": 37.380693287258154,
				"size_min": 0.1,
				"sync": false
			  }
			},
			"line_linked": {
			  "enable": true,
			  "distance": 150,
			  "color": "#ffffff",
			  "opacity": 0.4,
			  "width": 1.1
			},
			"move": {
			  "enable": true,
			  "speed": 6,
			  "direction": "none",
			  "random": false,
			  "straight": false,
			  "out_mode": "out",
			  "bounce": false,
			  "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
		  },
		  "interactivity": {
			"detect_on": "canvas",
			"events": {
			  "onhover": {
				"enable": false,
				"mode": "repulse"
			  },
			  "onclick": {
				"enable": true,
				"mode": "push"
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 400,
				"line_linked": {
				  "opacity": 1
				}
			  },
			  "bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			  },
			  "repulse": {
				"distance": 200,
				"duration": 0.4
			  },
			  "push": {
				"particles_nb": 4
			  },
			  "remove": {
				"particles_nb": 2
			  }
			}
		  },
		  "retina_detect": true
		}

    );
  });
})(jQuery);

/*================================ End ====================================*/
