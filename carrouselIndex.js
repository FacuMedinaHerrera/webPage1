document.addEventListener('DOMContentLoaded', () => {
    var elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150
    })
});