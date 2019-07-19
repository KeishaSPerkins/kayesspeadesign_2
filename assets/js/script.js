let menuToggleButton = document.getElementById("nav-toggle");
let menu = document.getElementById("main-nav");

menuToggleButton.addEventListener("click", toggleMenu);

function toggleMenu(){
	if (menuToggleButton.classList.contains('open')){
		menuToggleButton.classList.remove('open');
		menu.classList.remove('open');
		menuToggleButton.innerHTML = "<svg><use href='#menu' /></svg>";
	} else{
		menuToggleButton.classList.add('open');
		menu.classList.add('open');
		menuToggleButton.innerHTML = "<svg><use href='#cross' /></svg>";

	}
}