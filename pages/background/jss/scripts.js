
		var fromDate = new Date(2015, 02, 6); 
				timer = setInterval(function() {
					//fromDate.setSeconds(fromDate.getSeconds() );
				  setDates('countdown',  fromDate);
				}, 1000);
				
				
				
				
				
					
		function setDates(element, fromDate) {
							console.log(fromDate);
						  var dateFrom = fromDate;
						  var now = new Date();
						  var difference = now.getTime() - dateFrom.getTime();

						  if (difference <= 0) {

							// Timer done
							clearInterval(timer);
						  
						  } else {
							
							var seconds = Math.floor(difference / 1000);
							var minutes = Math.floor(seconds / 60);
							var hours = Math.floor(minutes / 60);
							var days = Math.floor(hours / 24);

							hours %= 24;
							minutes %= 60;
							seconds %= 60;

							$("#"+element+" .days").text(days);
							$("#"+element+"  .hours").text(hours);
							$("#"+element+"  .minutes").text(minutes);
							$("#"+element+"  .seconds").text(seconds);
						  }
						}	
					
				
				
jQuery(function ($) {
	
	var progress= 0;
    'use strict';
	/* WHEN LOADED */
	$(window).load(function() {
			$('#status').delay(100).fadeOut();
			$('#preloader').delay(200).fadeOut('slow');
			$('#status .status-mes').text('100%'); 
		 clearInterval(calcPercent);
	});
	
	/*** FUNCTIONS ***/
	

	 
	var calcPercent = setInterval(function() {
			//loop through the items
			
		/* LOADING */
		if(progress==100){
			clearInterval(calcPercent);
		}else{
			progress++;
		}
		
			

		$('#status .status-mes').text(progress+'%');
	}, 150 );
 
	

 


    /* === jQuery for page scrolling feature - requires jQuery Easing plugin === */
    (function () {
        $('a.scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }());



    /* ======= Full Screen BG ======= */
    (function () {

        $(".full-height").height($(window).height());
        $(window).resize(function(){
            $(".full-height").height($(window).height());
        });

    }());


		


			
			
   


    /* === Progress Bar === */
    (function () {

        $('.progress').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'),function(){
                    $(this).css('width', $(this).attr('aria-valuenow')+'%');
                });
                $(this).off('inview');
            }
        });

    }());  






  



    /* ======= particles js ======= */
    (function () {

        particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 100,
              "density": {
                "enable": true,
                "value_area":1000
              }
            },
            "color": {
              "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
            },

            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#fff"
              }
            },
            "opacity": {
              "value": 0.6,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 2,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 120,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
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
        });

    }());



}); // JQuery end
