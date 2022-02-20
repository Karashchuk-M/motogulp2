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
		
const acc= document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

})