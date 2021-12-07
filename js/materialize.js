// Initialization Materialize JS.

// Carousel
document.addEventListener('DOMContentLoaded', function() {
	let slider = document.querySelectorAll('.carousel');
	M.Carousel.init(slider, {
		fullWidth: true,
		indicators: true,
	});
});

// FAQ - Perguntas Frequentes.
document.addEventListener('DOMContentLoaded', function () {
	let collapse = document.querySelectorAll('.collapsible')
	M.Collapsible.init(collapse)
});
