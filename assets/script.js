// tableau des slides
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Index globale pour indication du slide actif
let indexCurrent = 0;
console.log("Index initial : ", indexCurrent);

// appelle les elements
const bannerImage = document.querySelector(".banner-img");
const paragraphBanner = document.getElementById("paragraphBanner");
const bulletsContainer = document.querySelector(".dots");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");

function activeSlide(){
	// mise à jour du tagLine actif
	paragraphBanner.innerHTML = slides[indexCurrent].tagLine;
	// mise à jour du slide actif
	bannerImage.src = `./assets/images/slideshow/${slides[indexCurrent].image}`;

	// mise à jour du dot actif
	// ne pas oublier d'appeler l'element dots
	const dots = document.querySelectorAll(".dot");
dots.forEach((dot, indexDots ) => {
	if(indexDots === indexCurrent) {
		dot.classList.add("dot_selected");
	}
	else {
		dot.classList.remove("dot_selected");
	}
});
}

// Evénement pour "Précédent" avec indice décrémenté -- manuellement
precedent.addEventListener("click", function() {
  indexCurrent --;  
//   si inf < à 0 alors indexCurrent recule de 1 (faire attention à la syntaxe !)
  if (indexCurrent < 0) {
	indexCurrent = slides.length -1;
  }
  console.log("Slide précédent, index :", indexCurrent);
  activeSlide();
});

// evenement pour suivant avec modulo % pour assurer le retour au 1er slide après le dernier
suivant.addEventListener("click", function() { indexCurrent = (indexCurrent + 1) % slides.length;
console.log("slide suivant, index :", indexCurrent) 

// appel de la fonction pour activer le changement d'img
activeSlide();
});


// creation des dots pour qu'ils parcourt chaque slide
slides.forEach(function(slide, indexSlide) {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	if(indexSlide === 0) {
		dot.classList.add("dot_selected")
	  }

	// attribution à la div .dots
	bulletsContainer.appendChild(dot);

	// evenement & association de l'index du dot à l'index du slide
dot.addEventListener("click", function() {
	// mise à jour l'index general (indexcurrent) avec le dot actif
indexCurrent = indexSlide;



// mise à jour de l'affichage // à l'index actif
activeSlide();
});
});

// creation de fonctions pour mise à jour du slide actif (img + tagLine)


