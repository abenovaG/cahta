let slideIndexs = 1;
showSlides(slideIndexs);

function plusSlides(n) {
    showSlides(slideIndexs += n);
}
function currentSlide(n) {
    showSlides(slideIndexs = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('legend');

    if (n > slides.length) {
        slideIndexs = 1
    }
    if (n < 1) {
        slideIndexs=slides.length
    }
    for(i=0; i <slides.length ; i++) {
        slides[i].style.display= 'none';
    }
    slides[slideIndexs-1].style.display = 'block';
}