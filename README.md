someFrillsCarousel
==================

The world needs more jQuery carousels, so I'm doing what I can.

Install
-------

``` html
<script src="someFrillsCarousel.min.js"></script>
```

or

`` bash
bower install some-frills-carousel
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


Pagination options
------------------
Pagination can use an href to carousel item selector, or can use data-carousel-target which points to data-carousel-item,
eg: 

### Item: 

``` html
<li id="carousel_item_1"></li>
```

### Pagination link: 

```  html
<a href="#carousel_item_1"></a>
```

or

### Item: 

``` html 
<li data-carousel-item='1'></li>
```

### Pagination link: 

``` html 
<a href="#" data-carousel-target='1'></a>
```

With Ember.js:
--------------

### bower.json:

 ``` json 
{
  "dependencies": {
    "some-frills-carousel": "^0.0.1"
	}
}
```

### Install:

``` bash
bower install
```

### Brocfile.js:
``` javascript
app.import('bower_components/some-frills-carousel/someFrillsCarousel.js');
```

### render component from template:

``` handlebars
{{carousel-panel carousel_items=model.carousel_items }}
```

### components/carousel-panel/components.js:

``` javascript
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'carousel_box',
  carousel_items: null,
  didInsertElement: function () {
	  Ember.$('#' + this.elementId).someFrillsCarousel({delay: 6000, speed: 750}); 
  }
});
```

### components/carousel-panel/template.hbs:

``` handlebars
<div class="carousel_container">
	<ul class="list-unstyled">
		{{#each item in carousel_items}}
			{{carousel-item item=item}}
		{{/each}}
	</ul>
</div>
<hr/>
<div class="carousel_pagination">
	{{#each item in carousel_items}}
		<a href="#" data-carousel-target="{{unbound item.id}}">•</a>
	{{/each}}
</div>
```

### components/carousel-item/component.js:

``` javascript
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: 'carousel_item',
  item: null,
  'data-carousel-item': Ember.computed.oneWay('item.id'),
	attributeBindings: ['data-carousel-item']
});
```

### components/carousel-item/template.hbs:

``` handlebars
{{{item.content}}}
```
