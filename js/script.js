// const slides = array. Chaque objet représente une image (le nom du fichier image) et tagLine (le texte à afficher avec balises HTML).
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


// On vise et on stocke ces éléments du DOM
const bannerImg = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// On initialise la diapo active à l'index 0
let currentSlide = 0;
const dots = [];

// On initialise les dots et les synchronise aux slides
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.className = "dot" + (index === 0 ? " dot_selected" : "");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
  dots.push(dot);
});

// On met à jour dynamiquement la src de l'img, ainsi que le TagLine en fonction du 'currentSlide'.
function updateCarousel() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  bannerTagLine.innerHTML = slides[currentSlide].tagLine;

  // On active ou désactive les dots selon le 'currentSlide'.
  dots.forEach((dot, index) =>
    dot.classList.toggle("dot_selected", index === currentSlide)
  );
}

// On met à jour l'index de currentSlide et appelle updateCarousel pour mettre à jour l'affichage.
function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length; // Gérer les débordements
  updateCarousel();
}

// Utiliser goToSlide pour les flèches
arrowLeft.addEventListener("click", () => goToSlide(currentSlide - 1));
arrowRight.addEventListener("click", () => goToSlide(currentSlide + 1));

// Initialisation du carousel
updateCarousel();
