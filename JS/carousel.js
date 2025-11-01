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
    let slides = document.getElementsByClassName('carousel-slide');

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

    // set the currently selected slide to visible
    slides[slide_index - 1].style.display = "block";
}