$(function () {
$('.top__slider').slick({
    dots: false,
    arrows: false,
    slidesToScroll: 0.5,
    slidesToShow: 2.5,
    autoplay: true,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 0.5,

            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 0.5
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    
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
    slidesToScroll: 0.36,
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
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

    ]
  
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