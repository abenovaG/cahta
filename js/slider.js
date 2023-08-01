(function () {
    const slide = document.querySelector(".slide.current");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const slides = Array.from(document.querySelectorAll(".slide"));
    const slideCount = slides.length;

    let slideIndex = 0;

    prevBtn.addEventListener("click", showPrevSlide);
    nextBtn.addEventListener("click", showNextSlide);

    function showPrevSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider();
    }

    const updateSlider = () => {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    };

    updateSlider();
})();