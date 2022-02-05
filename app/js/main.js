$(function () {
$('.top__slider').slick({
    dots: false,
    arrows: false,
    slidesToScroll: 0.5,
    slidesToShow: 2.5,
    autoplay: true,
});

$('.mission__slider').slick({
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
});
$('.whywe__slider').slick({
    dots: false,
    arrows: true,
    slidesToScroll: 0.5,
    slidesToShow: 1.6,
});
$('.whatinterestsyou__slider').slick({
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
});
$('.aftermap__slider').slick({
    arrows: true,
    slidesToScroll: 0.5,
    slidesToShow: 1.5,
    nextArrow: '<img src="../images/right-arrow.svg" alt="">',
    prevArrow: '<img src="../images/left-arrow.svg" alt="">',
});
		


})