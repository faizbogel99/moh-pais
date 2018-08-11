/*
******
Typed.js
******
*/
var typed3 = new Typed('#typed3', {
	strings: ['I am a Web designer', 'I am a Web developer', 'I am a Web designer and developer'],
	typeSpeed: 100,
	backSpeed: 50,
	smartBackspace: true, // this is a default
	loop: true
});

/*
*******
navbar
*******
*/
// Set options
var options = {
	offset: '#showHere',
	offsetSide: 'top',
	classes: {
		clone:   'banner--clone',
		stick:   'banner--stick',
		unstick: 'banner--unstick'
	}
};

// Initialise with options
var banner = new Headhesive('.banner', options);

// Headhesive destroy
// banner.destroy();

/*
**************
Smooth scroll
**************
*/
var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});
var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {easing: 'easeInCubic'});
var easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {easing: 'easeInQuart'});
var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {easing: 'easeInQuint'});

var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});
var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {easing: 'easeInOutCubic'});
var easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {easing: 'easeInOutQuart'});
var easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {easing: 'easeInOutQuint'});

var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {easing: 'easeOutQuad'});
var easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {easing: 'easeOutCubic'});
var easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {easing: 'easeOutQuart'});
var easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {easing: 'easeOutQuint'});

