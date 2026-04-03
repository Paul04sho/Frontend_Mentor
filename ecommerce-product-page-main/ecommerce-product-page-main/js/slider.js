
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const sliderContainer = document.querySelector(".slider-container")

let currentIndex = 0; // Tracks the current slide

// Function to display a specific slide based on the index
function showSlides(index) {
    if (index >= slides.length) {
        currentIndex = 0 // Reset to first slide
    } else if (index < 0) {
        currentIndex = slides.length - 1; // Go to the last slide
    } else {
        currentIndex = index; // Otherwise, set the provided index
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlides(currentIndex + 1);
}

function prevSlide() {
    showSlides(currentIndex - 1);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);