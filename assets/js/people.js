/*
 * Dynamic gallery using querySelector
 */
//Events variables
let slides = document.querySelector('.slider-items').children;
let nextSlide = document.querySelector(".right-slide");
let prevSlide = document.querySelector(".left-slide");
let totalSlides = slides.length;
let index = 0;

nextSlide.onclick = function() { // Move to the next slide
    next("next");
};
prevSlide.onclick = function() { // Move to the previous slide
    next("prev");
};

function next(direction) {

    if (direction == "next") { // if/else statement
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index--;
        }
    }

    for (i = 0; i < slides.length; i++) { // For loop 
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}