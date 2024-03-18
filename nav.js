const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const nav-links = document.querySelectorALL('.nav-links li');
	
burger .addEventListener('click', () => {
	//Toggle Nav

	
		nav.classList.toggle('nav-active');
//Animate Links
navLinks.forEach((link,index)=>{
	if (link.style.animation){
		link.style.animation = '';
	}
	else {
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5s}s`;
	}

});
//Burger Animation
burger.classList.toggle('toggle');


});


}
navSlide();