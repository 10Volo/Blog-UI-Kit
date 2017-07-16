var optionButton = document.querySelectorAll('.options');
var dropdowns = document.querySelectorAll('.dropdown');
var likeButtons = Array.from(document.querySelectorAll('.post-like'));

likeButtons.forEach(function(like){
	like.addEventListener('click', function(e){
		like.classList.add('presed');
		// like.classList.toggle('liked');
		setTimeout(function(){
			like.classList.remove('presed');
			like.classList.toggle('liked');
		}, 300);
	});
});

function closeDropdowns(){
	var dropdownsArray = Array.from(dropdowns);
	for ( var i = 0; i < dropdownsArray.length; i++ ){
		var d = dropdownsArray[i];
		if (d.classList.contains('show')){
			console.log('for removing', d);
			d.classList.remove('show');
		}
	}
};

optionButton.forEach(function(el){
	el.addEventListener('click', function(ev){
		// closeDropdowns();
		var dropdown = el.nextElementSibling;
		dropdown.classList.toggle('show');
	});
});

window.addEventListener('click', function(ev){
	var match  = ev.target.classList.contains('options') || ev.target.className == 'icon options-icon';
	if ( !match ){
		dropdowns.forEach(function(d){
			if (d.classList.contains('show')){
				d.classList.remove('show');
			}
		});
	}
});

var dropdownList = document.querySelector('#dropdown') || null;
var dropdownListOptions = document.querySelector('#dropdown .dropdown-options') || null;
var dropdownListArrow = document.querySelector('#dropdown .dropdown-arrow') || null;
var dropdownListSelected = document.querySelector('#dropdown .dropdown-selected') || null;

if (dropdownList && dropdownListOptions){

	var initOption = dropdownListOptions.children[0].textContent.trim();
	dropdownListSelected.textContent = initOption;

	dropdownList.addEventListener('click', function(e){
		dropdownListArrow.classList.toggle('rotated');
		dropdownListOptions.classList.toggle('show');
	});

}
if (dropdownListOptions && dropdownListSelected){
	dropdownListOptions.addEventListener('click', function(e){
		var option = e.target.textContent.trim();
		dropdownListSelected.textContent = option;
	});
}


var commentScroll = document.querySelectorAll('.comment-reply-wrapper');

if (commentScroll.length > 0){

	commentScroll.forEach(function(el){
		el.addEventListener('click', function(ev){
			var to = el.dataset.to;
			var toComment = document.querySelector('[data-id="' + to + '"]');
			var offset = toComment.offsetTop;
			// console.log(toComment);
			// console.log(toComment.offsetTop);
			window.scrollTo(0, offset - 100);
		});
	});
	
}

// var relatedPosts = document.querySelector('')


