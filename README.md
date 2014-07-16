someFrillsCarousel
==================

The world needs more jQuery carousels, so I'm doing what I can.

Install
-------

``` html
<script src="someFrillsCarousel.min.js"></script>
```

Use
---

``` html
<script type="text/javascript">
    $(document).ready(function(){ 
      $('.carousel').someFrillsCarousel({delay:6000,speed:750}); 
    });
</script> 
```

Options
-------
- Delay - integer, milliseconds, delay between slides, default: 7500
- Speed - integer, milliseconds, transition speed, default: 2000 

HTML Structure 
--------------

``` haml
.carousel
	.carousel_container
		%ul
			%li#item_one item
			%li#item_two item
	.carousel_pagination
		%a{href: '#item_one'} •				
		%a{href: '#item_two'} •				
```

CSS
---

``` scss
.carousel {
	ul {
		width: 100%;
		height: auto;
		position: relative;
		li.carousel_item {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: auto;
		}
	}
}
```