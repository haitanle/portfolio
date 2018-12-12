var menu = document.querySelector('.header_menu');
var drawer = document.querySelector('.nav');

menu.addEventListener('click', function(e){
	drawer.classList.toggle('open');
	e.stopPropagation();
});

var portfolio = document.querySelector('.project1');
var portfolio_desc = document.querySelector('#portfolio_desc');


portfolio.addEventListener('click', function(e){
	portfolio_desc.classList.toggle('open');
	e.stopPropagation();
})