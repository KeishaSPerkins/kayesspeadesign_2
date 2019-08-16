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

// Random colors for blog post cards

//I'm not calling assignColor() because I was given feedback on the changing colors being confusing
// function assignColor(){
// 	let blogCards = Array.from(document.getElementsByClassName('blog-card'));
// 	let readmore = Array.from(document.getElementsByClassName('button read-more'));

	
// 	blogCards.forEach(function(card) {
// 		let randomColor = Math.floor(Math.random() * (+10 - +1)) + +1;
// 		console.log(randomColor);

// 	switch(randomColor) {
// 	  case 1:
// 	    randomColor = "#00c7ba";
// 	    randomColorDark = "#018f86";
// 	    break;
// 	  case 2:
// 	    randomColor = "#ffae00";
// 	    randomColorDark = "#cf8d00";
// 	    break;
// 	  case 3:
// 	    randomColor = "#F2762E";
// 	    randomColorDark = "#c04e0c";
// 	    break;
// 	  case 4:
// 	    randomColor = "#F23030";
// 	    randomColorDark = "#d80e0e";
// 	    break;
// 	  case 5:
// 	    randomColor = "#555555";
// 	    randomColorDark = "#333333";
// 	    break;
// 	  case 6:
// 	    randomColor = "#00c7ba";
// 	    randomColorDark = "#018f86";
// 	    break;
// 	  case 7:
// 	    randomColor = "#ffae00";
// 	    randomColorDark = "#cf8d00";
// 	    break;
// 	  case 8:
// 	    randomColor = "#F2762E";
// 	    randomColorDark = "#c04e0c";
// 	    break;
// 	  case 9:
// 	    randomColor = "#F23030";
// 	    randomColorDark = "#d80e0e";
// 	    break;
// 	  case 10:
// 	    randomColor = "#555555";
// 	    randomColorDark = "#333333";
// 	    break;  
// 	  default: 
// 		  randomColor = "#555555";
// 		  randomColorDark = "#175a69";
// 	    // code block
// 	}
// 	  card.style.background = randomColor;
// 	  console.log(randomColor);
// 	});
// 	console.log(randomColor);
// }


let blogCards = Array.from(document.getElementsByClassName('blog-card'));

