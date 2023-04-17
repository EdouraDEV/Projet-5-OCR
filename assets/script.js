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

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const slidesImg = document.querySelector("#banner > img");
const slidesText = document.querySelector("#banner > p");
let currentIndex = 0;

const switchSlide = () => {
  slidesImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  slidesText.innerHTML = slides[currentIndex].tagLine;
};
const toggleDot = () => {
  const dotsList = Array.from(dots.children); // Convertir la liste des enfants de "dots" en tableau
  dotsList.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
};
leftArrow.addEventListener("click", () => {
  //revenir sur backslide, modif aussi image + texte
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
    //revenir sur le dernier slide
  }
  toggleDot();
  switchSlide();
});
rightArrow.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  //slide suivant avec changement d'img + text
  toggleDot();
  switchSlide();
});
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (currentIndex == index) {
    dot.classList.add("dot_selected");
  }
  dots.appendChild(dot);
  //Ajout des dot dans la div Dots
});
