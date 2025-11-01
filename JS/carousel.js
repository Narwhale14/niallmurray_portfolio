// Collection of all slide_indexs for all existing carousels
const carouselState = { slide_index: [] };

// All carousel objects
const carousels = document.getElementsByClassName("panel-carousel");

for(let i = 0; i < carousels.length; i++) {
    carouselState.slide_index.push(1);
    showSlide(carouselState.slide_index, i);
}

/**
 * Shifts to a slide based on a value from current slide
 * @param {*} n number of slides from current slide
 * @param {*} c carousel it's shifting from
 */
function shiftSlide(n, c) {
    showSlide(carouselState.slide_index[c] += n, c);
}

/**
 * Selects a slide directly in carousel
 * @param {*} n number of slide to select
 * @param {*} c carousel it's selecting from
 */
function selectSlide(n, c) {
    showSlide(carouselState.slide_index[c] = n, c);
}

/**
 * Displays the current slide in carousel
 * @param {*} n # of slide in carousel
 * @param {*} c # of carousel to use
 */
function showSlide(n, c) {
    const slides = carousels[c].getElementsByClassName("carousel-slide");
    const selectors = carousels[c].getElementsByClassName("selector");

    if(slides.length == 0) return 0;

    if(n > slides.length) carouselState.slide_index[c] = 1;
    if(n < 1) carouselState.slide_index[c] = slides.length;

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(let i = 0; i < selectors.length; i++) {
        selectors[i].classList.remove("selector-active");
    }

    slides[carouselState.slide_index[c] - 1].style.display = "block";
    selectors[carouselState.slide_index[c] - 1].classList.add("selector-active");
}