/* RES */
var change = document.querySelector('#chang');
var btn = document.querySelector("#btn");
var btn_menu = document.querySelectorAll('.bt_menu li');
btn.addEventListener('click', function() {
	change.classList.toggle('open');
});
btn_menu.forEach(btn_m =>{
	btn_m.addEventListener('click', function() {
		change.classList.toggle('open');
	});
});
/* SCROLL EFFECTS */
window.onscroll = function() {scrollShadow()};

function scrollShadow(){
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.querySelector('.shadow').style.boxShadow = '0 2px 2px rgba(0,0,0,.7)';
		document.querySelector('.shadow').style.height = '117px';
	}

	else{
		document.querySelector('.shadow').style.boxShadow = 'none';	
		document.querySelector('.shadow').style.height = '112px';
	}
}				
