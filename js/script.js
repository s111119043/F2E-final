var swiper = new Swiper('.carousel', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.carousel-control-next',
        prevEl: '.carousel-control-prev',
    },
    pagination: {
        el: '.carousel-indicators',
        clickable: true,
    },
});
