$(function(){

  $('.rate-star').rateYo({
    rating: 4.6,
    readOnly: true,
    starWidth: "14px",
  });

  $('.list__slider-inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 700,
    nextArrow: '<button type="button" class="slick-btn slick-next lnr-chevron-right"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev lnr-chevron-left"></button>',
  });

  $('.feed__slider-inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    speed: 700,
    // autoplay: true,
    // autoplaySpeed: 5000,
    nextArrow: '<button type="button" class="slick-btn slick-next lnr-chevron-right"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev lnr-chevron-left"></button>',
  });





  var mixer = mixitup('.releaser__inner-box');
});