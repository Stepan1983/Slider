let sliderIntro = document.querySelector(".slider-intro");
let checkboxButtons = document.querySelectorAll(".slider-checkbox-button");

let slideImages = ["slider-intro1.png", "slider-intro2.png", "slider-intro3.png", "slider-intro4.png", "slider-intro5.png"];
let currentIndex = 0;


function changeSlide() {
    sliderIntro.src = "img/" + slideImages[currentIndex];
}


checkboxButtons.forEach(function(checkbox, index) {
    checkbox.addEventListener("click", function() {
        currentIndex = index; 
        changeSlide(); 
    });
});
