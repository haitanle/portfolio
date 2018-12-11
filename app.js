var menu = document.querySelector('.header_menu');
var drawer = document.querySelector('.nav');

menu.addEventListener('click', function(e){
	drawer.classList.toggle('open');
	e.stopPropagation();
});