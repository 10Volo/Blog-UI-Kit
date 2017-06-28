var optionButton = document.querySelectorAll('.card-options');
var dropdowns = document.querySelectorAll('.card-dropdown');

optionButton.forEach(function(el){
	el.addEventListener('click', function(ev){
		var dropdown = el.nextElementSibling;
		// console.log(dropdowns);
		dropdowns.forEach(function(d){
			if (d.classList.contains('show')){
				d.classList.remove('show');
			}
		});
		dropdown.classList.toggle('show');
	});
});

window.addEventListener('click', function(ev){
	var match  = ev.target.className == 'card-options' || ev.target.className == 'icon options-icon';
	if ( !match ){
		dropdowns.forEach(function(d){
			if (d.classList.contains('show')){
				d.classList.remove('show');
			}
		});
	}
});
