/*!
	SomeFrillsCarousel v1.0 - 2014-01-26
	Simple carousel with pagination, delay and speed settings
	(c) 2014 Gordon B. Isnor - http://github.com/someFrillsCarousel
*/
(function($) {

  $.fn.SomeFrillsCarousel = function(args) {

    return $(this).each(function () {

    	/* config */
			var carouselDelay = args.delay || 6000; /* delay between slides in milliseconds */
			var carouselTransitionSpeed = args.speed || 750; /* transition speed in milliseconds */
      /* end config */



      /* setup vars */
      var $this = $(this);
  		var $carousel = $this.find('div.carousel_container');
  		var $pagination = $this.find('div.carousel_pagination');
		  var $window = $(window);
		  /* end setup vars */



		  /* activate carousel */
			function activateCarouselItem(el) {
			  $this.find("ul li.carousel_item.active").fadeOut(carouselTransitionSpeed).removeClass('active');
			  el.fadeIn(carouselTransitionSpeed).addClass('active');
			};
			/* end activate carousel */


			
			/* resize window */
		  $window.resize(function() {
		    active_item = $this.find("ul.list-unstyled li:visible");
		    $carousel.height(active_item.height());
		  }).resize();
		  /* end resize window */



	 		$(document).ready(function(){
	    	active_item = $this.find("ul.list-unstyled li:visible");
	    	$carousel.height(active_item.height());


				/* start carousel */
				if($this.length) {
				  
				  /* activate first item on page load */
			    activateCarouselItem($this.find("ul li.carousel_item").first());
				    
			    /* activate first pagination item on page load */
			    $pagination.find("a").first().addClass('active');

			    /* set carousel in motion */
			    setInterval(function(){ activateNextCarouselItem() }, carouselDelay);


					/* carousel pagination */
					$(document).on("click", "div.carousel_pagination a", function(){
					  if($(this).hasClass('active')) { return false; };
					  $pagination.find("a").removeClass('active');
					  activateCarouselItem( $($(this).attr('href')) );
					  $(this).addClass('active');
					  return false;
					});


		  };
		  /* end start carousel */


	  	});




 		 	/* start activateNextCarouselItem */
			function activateNextCarouselItem() {
			  
			  if( $this.find("ul li.carousel_item:last").hasClass('active') ) {
			   	
			    /* if on last item, go to first */ 

			    activateCarouselItem($this.find("ul li.carousel_item").first());
			    
			    /* deactivate current pagination item */
			    var current_page = $pagination.find("a.active").removeClass('active');
			    
			    /* activate next pagination item */
			    $pagination.find("a").first().addClass('active');

			  } else {

			    /* else go to next item */

			    activateCarouselItem($this.find("ul li.carousel_item.active").next("li.carousel_item"));
			    
			    /* deactivate current pagination item */
			    var current_page = $pagination.find("a.active").removeClass('active');
			    
			    /* activate next pagination item */
			    $(current_page).next("a").addClass('active');

			  };
			};

 		  /* end activateNextCarouselItem */


		}) /* end this each */

	} /* end some frills */

})( jQuery );
