// var menu = document.querySelector('.menu_icon');
// var drawer = document.querySelector('.drawer');
// var body = document.querySelector('body');

// menu.addEventListener('click', function(e){
// 	drawer.classList.toggle('open');
// 	e.stopPropagation();
// });

// body.addEventListener('click', function(e){
// 	drawer.classList.remove('open');
// });

// var portfolio = document.querySelector('.project1');
// var portfolio_desc = document.querySelector('#portfolio');
// var description = document.querySelector('.description');

// portfolio.addEventListener('click', function(e){
// 	movie_desc.classList.remove('open');
// 	weather_desc.classList.remove('open');
// 	portfolio_desc.classList.add('open');
// 	e.stopPropagation();
// });

// var movie = document.querySelector('.project2');
// var movie_desc = document.querySelector('#movie');

// movie.addEventListener('click', function(e){
// 	portfolio_desc.classList.remove('open');
// 	weather_desc.classList.remove('open');
// 	movie_desc.classList.add('open');
// 	e.stopPropagation();
// });

// var weather = document.querySelector('.project3');
// var weather_desc = document.querySelector('#weather');

// weather.addEventListener('click', function(e){
// 	portfolio_desc.classList.remove('open');
// 	movie_desc.classList.remove('open');
// 	weather_desc.classList.add('open');
// 	e.stopPropagation();
// });



var click_icon = document.querySelector('.click_icon');

click_icon.addEventListener('click', function(e){
	//document.querySelector('.menu').style.width = '0%';
	document.querySelector('.drawer').classList.toggle('menu_toggle');
	e.stopPropagation();
});

var portfolio = document.querySelector('.portfolio_tn');

// TODO: refactor add/remove toggle 
portfolio.addEventListener('click', function(e){
	document.querySelector('#weather').classList.add('project_hide');
	document.querySelector('#game').classList.add('project_hide');
	document.querySelector('#movie').classList.add('project_hide');
	document.querySelector('#portfolio').classList.remove('project_hide');
	e.stopPropagation();
});

var movie = document.querySelector('.movie_tn');

movie.addEventListener('click', function(e){
	document.querySelector('#portfolio').classList.add('project_hide');
	document.querySelector('#weather').classList.add('project_hide');
	document.querySelector('#game').classList.add('project_hide');
	document.querySelector('#movie').classList.remove('project_hide');
	e.stopPropagation();
});

var weather = document.querySelector('.weather_tn');

weather.addEventListener('click', function(e){
	document.querySelector('#portfolio').classList.add('project_hide');
	document.querySelector('#movie').classList.add('project_hide');
	document.querySelector('#game').classList.add('project_hide');
	document.querySelector('#weather').classList.remove('project_hide');
	e.stopPropagation();
});


var game = document.querySelector('.game_tn');

game.addEventListener('click', function(e){
	document.querySelector('#portfolio').classList.add('project_hide');
	document.querySelector('#movie').classList.add('project_hide');
	document.querySelector('#weather').classList.add('project_hide');
	document.querySelector('#game').classList.remove('project_hide');
	e.stopPropagation();
});
