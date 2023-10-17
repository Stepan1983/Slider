let sliderIntro = document.querySelector(".slider-intro");
let checkboxButtons = document.querySelectorAll(".slider-checkbox-button");

let slideImages = ["slider-intro1.png", "slider-intro2.png", "slider-intro3.png", "slider-intro4.png", "slider-intro5.png"];
let currentIndex = 0;

// Функция для изменения изображения
function changeSlide() {
    sliderIntro.src = "img/" + slideImages[currentIndex];
}

// Обработчик клика для каждого checkbox
checkboxButtons.forEach(function(checkbox, index) {
    checkbox.addEventListener("click", function() {
        currentIndex = index; // Обновляем текущий индекс
        changeSlide(); // Изменяем изображение
    });
});
