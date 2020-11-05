$(function(){

    $('.services__slider__inner').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<img class="services__slider__chevron-left chevron" src="img/ico/chevron-left.svg" alt="chevron-left">',
        nextArrow: '<img class="services__slider__chevron-right chevron" src="img/ico/chevron-right.svg" alt="chevron-right">',
    });

    $('.directionsOfActivity__slider').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<img class="directionsOfActivity__slider__chevron-left chevron" src="img/ico/chevron-left.svg" alt="chevron-left">',
        nextArrow: '<img class="directionsOfActivity__slider__chevron-right chevron" src="img/ico/chevron-right.svg" alt="chevron-right">',
    });

    $('.reviews__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<img class="reviews__slider__chevron-left chevron" src="img/ico/chevron-left.svg" alt="chevron-left">',
        nextArrow: '<img class="reviews__slider__chevron-right chevron" src="img/ico/chevron-right.svg" alt="chevron-right">',
    });


});




