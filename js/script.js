// Tableau des slides avec leurs images et textes associés
const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Variable pour suivre le slide actuellement affiché
let currentSlide = 0;

// Fonction pour afficher un slide en fonction de son index
function showSlide(index) {
	// Sélectionne l'image de la bannière et le paragraphe de texte
    const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');

	// Calcule l'index du slide à afficher
    currentSlide = (index + slides.length) % slides.length;

	// Met à jour la source de l'image et le contenu du texte avec le slide actuel    bannerImg.src = slides[currentSlide].image;
    bannerText.innerHTML = slides[currentSlide].tagLine;

	// Met à jour les points pour refléter le slide actuellement affiché
    updateDots();
}

// Fonction pour mettre à jour les points (dots) du carrousel
function updateDots() {

	// Sélectionne tous les éléments de point (dot)
    const dots = document.querySelectorAll('.dot');

	// Parcourt chaque point et met à jour son état sélectionné
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Ajoute un écouteur d'événement sur la flèche gauche pour afficher le slide précédent
document.querySelector('.arrow-left').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Ajoute un écouteur d'événement sur la flèche droite pour afficher le slide suivant
document.querySelector('.arrow-right').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Lorsque le document est complètement chargé, exécute la fonction suivante
document.addEventListener('DOMContentLoaded', () => {
	
    // Sélectionne le conteneur des points (dots)
    const dotsContainer = document.querySelector('.dots');

    // Crée un point (dot) pour chaque slide et ajoute des écouteurs d'événements
    slides.forEach((_, index) => {
        const dot = document.createElement('div'); // Crée un nouvel élément div pour le point
        dot.classList.add('dot'); // Ajoute la classe dot au nouvel élément

        // Si c'est le premier point, ajoute la classe de sélection
        if (index === 0) dot.classList.add('dot_selected');

        // Ajoute un écouteur d'événement sur le point pour afficher le slide correspondant lorsqu'il est cliqué
        dot.addEventListener('click', () => showSlide(index));

        // Ajoute le point au conteneur des points
        dotsContainer.appendChild(dot);
    });

    // Affiche le premier slide (index 0) au chargement de la page
    showSlide(currentSlide);
});