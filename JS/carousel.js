let slide_index = 1;
showSlide(slide_index);

// user controls - shift slide left or right
function shiftSlide(n) {
    console.log(slide_index);
    showSlide(slide_index += n);
}

function currentSlide(n) {
    showSlide(slide_index = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    let selectors = document.getElementsByClassName("selector");

    // error handling
    if(slides.length == 0)
        return 0;

    // loop back to the start
    if(n > slides.length)
        slide_index = 1;

    // loop back to the end
    if(n < 1)
        slide_index = slides.length

    // set all slides to invisible
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // removes all active classes from dots
    for(let i = 0; i < selectors.length; i++) {
        selectors[i].classList.remove("selector-active");
    }

    // set the currently selected slide to visible
    slides[slide_index - 1].style.display = "block";

    // adds the active class to the current selector of the image
    selectors[slide_index - 1].classList.add("selector-active");
}