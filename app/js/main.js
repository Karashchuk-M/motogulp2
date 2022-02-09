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
$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
      }else{       $(this).children(".video").get(0).pause();
    $(this).children(".playpause").fadeIn();
      }
  });
  $(".accordeon dd").hide().prev().click(function() {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});
		


})