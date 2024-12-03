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

// Initialisation de l'index
let index = 0;
console.log("Index initial : ", index);

// Sélection des flèches
const precedent = document.getElementById("precedent");
const suivant = document.getElementById("suivant");

// Vérif
console.log("precedent :", precedent);
console.log("suivant :", suivant);


// Evénement pour "Précédent"
precedent.addEventListener("click", function() {
  index = (index - 1 + slides.length) % slides.length; 

  console.log("Slide précédent, index :", index);
});

suivant.addEventListener("click", function() { index = (index + 1) % slides.length;
console.log("slide suivant, index :", index)});

// test pour dots
const bullets = document.querySelector(".dots");
bullets.classList.add("dot");
console.log(bullets);

// creation de 4 dots
numberDots = 4;


