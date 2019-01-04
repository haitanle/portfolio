var click_icon = document.querySelector('.click_icon');

click_icon.addEventListener('click', function(e){
	document.querySelector('.drawer').classList.toggle('menu_toggle');
	e.stopPropagation();
});

var portfolio = document.querySelector('.portfolio_tn');

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
